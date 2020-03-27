import React, {Component} from 'react';
import axios from 'axios';
import {Stage,Layer,Group, Rect} from 'react-konva';
import {Node} from "./node";

const server = 'http://localhost:8000/api/v1/nodes/';


export class Skillmap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null,
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
                    <Layer>
                        {/* lineVisibleを使って、rootノードから生成される余計なLineを非表示にしている */}
                        <Node data={this.state.data} lineVisible={false}/>
                    </Layer>
                </Stage>
            )
        }
        
    }
}