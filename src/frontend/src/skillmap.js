import React, {Component} from 'react';
import axios from 'axios';
import {Stage} from 'react-konva';
import {ShowPopupContext} from './context';
import {SkillmapLayer} from './skillmapLayer';
import {PopupLayer} from './popupLayer';

const server = 'http://localhost:8000/api/v1/nodes/';


export class Skillmap extends Component {
    constructor(props) {
        super(props);

        this.toggleshowPopup = () => {
            this.setState({showPopup: !this.state.showPopup});
        }

        this.state = {
            stageWidth: window.innerWidth,
            loading: true,
            data: null,
            showPopup: false,
            toggleshowPopup: this.toggleshowPopup,
        }
        this.changeSize = this.changeSize.bind(this)
    }

    componentDidMount() {
        window.addEventListener("resize", this.changeSize);
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
        window.removeEventListener("resize", this.changeSize);
    }

    changeSize() {
        const width = window.innerWidth;
        this.setState({
            stageWidth: width
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
                    height={window.innerHeight}
                    draggable>
                    <ShowPopupContext.Provider value={this.state}>
                        <SkillmapLayer data={this.state.data}/>
                        <ShowPopupContext.Consumer>
                            {({showPopup}) => (
                                showPopup && <PopupLayer/>
                            )}
                        </ShowPopupContext.Consumer>
                    </ShowPopupContext.Provider>
                </Stage>
            )
        }
        
    }
}