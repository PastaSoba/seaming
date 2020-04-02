import React, {Component} from 'react';
import axios from 'axios';
import {Stage} from 'react-konva';
import {ShowPopupContext, PopupContentContext} from './context';
import {SkillmapLayer} from './skillmapLayer';
import {PopupLayer} from './popupLayer';

const server = 'http://localhost:8000/api/v1/nodes/';


export class Skillmap extends Component {
    constructor(props) {
        super(props);

        this.toggleshowPopup = () => {
            this.setState({showPopup: !this.state.showPopup});
        }

        this.setUrl = (url) => {
            this.setState({popupContentUrl: url});
        }

        this.state = {
            stageX: 0,
            stageY: 0,
            stageWidth: window.innerWidth,
            stageHeight: window.innerHeight,
            loading: true,
            data: null,
            showPopup: false,
            toggleshowPopup: this.toggleshowPopup,
            popupContentUrl: "",
            setUrl: this.setUrl,
        }
        
        this.changeWindowSizeHandler = this.changeWindowSizeHandler.bind(this);
        this.dragEndHandler = this.dragEndHandler.bind(this)
    }

    componentDidMount() {
        window.addEventListener("resize", this.changeWindowSizeHandler);
        axios.get(server)
            .then((res) => {
                console.log("data received");
                this.setState({loading: false, data: res.data});
            })
            .catch((err) => {
                this.setState({loading: false});
                console.log(err);
            });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.changeWindowSizeHandler);
    }

    changeWindowSizeHandler() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.setState({
            stageWidth: width,
            stageHeight: height
        });
    }

    dragEndHandler(e) {
        const stage = e.target;
        this.setState({
            stageX: stage.getAttr('x'),
            stageY: stage.getAttr('y')
        });
    }

    render() {
        if (this.state.loading === true) {
            return (
                <p>Now Loading...</p>
            )
        }
        else {
            return (
                <Stage 
                    width={this.state.stageWidth}
                    height={this.state.stageHeight}
                    draggable={!this.state.showPopup}
                    onDragEnd={this.dragEndHandler}>
                    <ShowPopupContext.Provider value={this.state}>
                        <PopupContentContext.Provider value={this.state}>
                            <SkillmapLayer data={this.state.data}/>
                            <PopupLayer 
                                stageX={this.state.stageX}
                                stageY={this.state.stageY}
                                stageWidth={this.state.stageWidth}
                                stageHeight={this.state.stageHeight}/>
                        </PopupContentContext.Provider>
                    </ShowPopupContext.Provider>
                </Stage>
            )
        }
        
    }
}