import React, { Component } from 'react';
import { Circle, Text, Group } from 'react-konva';

//  木構造のような構造にする
export class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rel_x: this.props.position_x,
            rel_y: this.props.position_y,
        }
    }
    handleDragEnd = e => {
        this.setState({
            rel_x: e.target.x(),
            rel_y: e.target.y()
        });
    };
    render() {
        return (
            <Group
                x={this.state.rel_x}
                y={this.state.rel_y}
                draggable
                onDragStart={(evt) => { evt.cancelBubble = true }}
                onDragEnd={this.handleDragEnd}>
                <Circle
                    radius={50}
                    fill="#89b717"/>
                <Text
                    fontSize={24}
                    text={this.props.name}
                    fill="black"
                    align="center"
                    verticalAlign="middle"/>

                {/* {
                this.props.unchangeableinfo_set.map((data) =>
                <Node data={data} />
                )
                } */}
            </Group >
        )
    }
}



// @ konvaのレイヤーの仕組み @
//              Stage
//                |
//         +------+------+
//         |             |
//       Layer         Layer
//         |             |
//   +-----+-----+     Shape
//   |           |
// Group       Group
//   |           |
//   +       +---+---+
//   |       |       |
// Shape   Group    Shape
//           |
//           +
//           |
//         Shape