import React, {Component} from 'react';
import axios from 'axios';
import {Stage,Layer} from 'react-konva';
import {Node} from "./node";

const server = 'http://localhost:8000/api/v1/nodes/';


export class Skillmap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null
        }
    }

    componentDidMount() {
        axios.get(server)
            .then((res) => {
                this.setState({loading: false, data: res.data});
            })
            .catch((err) => {
                this.setState({loading: false});
                console.log(err);
            });
    }

    render() {
        if (this.state.loding === true) {
            return (
                <p>Now Loading...</p>
            )
        }
        else {
            // console.log(this.state.data)
            return (
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Node data={this.state.data} />
                    </Layer>
                </Stage>
            )
        }
        
    }
}