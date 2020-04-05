import React, {Component} from 'react';
import axios from 'axios';
import {Stage} from 'react-konva';
import {SkillmapLayer} from './skillmapLayer';
import { PopupContentContext } from './context';

const server = 'http://localhost:8000/api/v1/nodes/';


export class Skillmap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stageX: 0,
            stageY: 0,
            stageWidth: window.innerWidth,
            stageHeight: window.innerHeight,

            loading: true,
            data: null,

            popupContentUrl: "",
            setUrl: null
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
                <PopupContentContext.Consumer>
                    {({setUrl}) => (
                        // Because Stage kills Consumer API, I use Consumer here then use Provider more.
                        <Stage 
                            width={this.state.stageWidth}
                            height={this.state.stageHeight}
                            draggable
                            onDragEnd={this.dragEndHandler}>
                            <PopupContentContext.Provider value={{setUrl: setUrl}}>
                                <SkillmapLayer data={this.state.data}/>
                            </PopupContentContext.Provider>
                        </Stage>
                    )}
                </PopupContentContext.Consumer>
            )
        }
        
    }
}