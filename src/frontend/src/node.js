import React, { Component } from 'react';
import Konva from 'konva';
import { Circle, Text, Group, Easings, Line } from 'react-konva';

//  木構造のような構造にする
export class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rel_x: this.props.data.position_x,
            rel_y: this.props.data.position_y,
        }
    }

    // アニメーション効果
    handleDragStart = e => {
        e.target.to({
            shadowOffset: {
              x: 15,
              y: 15
            },
            scaleX: 1.05,
            scaleY: 1.05
          });
    };

    // アニメーション効果、ノード位置のstateへの反映
    handleDragEnd = e => {
        this.setState({
            rel_x: e.target.x(),
            rel_y: e.target.y()
        })
        
        // 親ノードにstateの変更が伝搬しないようにする
        e.cancelBubble = true

        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
        });
    };

    // ノード間をつなぎ続けるようにLineを更新する
    handleDragMove = e => {
        // e.target について
        // https://www.w3schools.com/jsref/event_target.asp

        const line = e.target.children[0]; // this is Konva.Line() object
        line.setAttrs({
            points: [-e.target.x(), -e.target.y(), 0, 0],
            depth: 1
        });
    }

    render() {
        return (
            <Group
                x={this.state.rel_x}
                y={this.state.rel_y}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                onDragMove={this.handleDragMove}>

                {/* ノード間をつなぐLine */}
                <Line
                    points={[-this.state.rel_x, -this.state.rel_y, 0, 0]}
                    visible={this.props.lineVisible}
                    stroke={"gray"}
                    strokeWidth={3}/>
                
                {/* ノードの子ノードを生成する */}
                {this.props.data.unchangeableinfo_set.map((data) => 
                    <Node data={data} lineVisible={true} />
                )}

                {/* ノードを構成するオブジェクト */}
                <Group
                    onClick={e => {alert("hello")}}>

                    <Circle
                        radius={50}
                        fill={"#89b717"}
                        shadowColor={"black"}
                        shadowBlur={10}
                        shadowOpacity={0.6}/>

                    <Text
                        fontSize={24}
                        text={this.props.data.name}
                        fill={"black"}
                        align={"center"}
                        verticalAlign={"middle"}
                        offsetX={20}
                        offsetY={10}/>
                </Group>
            </Group>
        )
    }
}