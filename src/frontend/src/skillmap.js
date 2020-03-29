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
            loading: true,
            data: null,
            showPopup: false,
            toggleshowPopup: this.toggleshowPopup,
        }
    }

    componentDidMount() {
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

    render() {
        if (this.state.loading === true) {
            return (
                <p>Now Loading...</p>
            )
        }
        else {
            return (
                <Stage 
                    width={window.innerWidth}
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