import React, {Component} from 'react';
import {Layer, Rect, Group} from 'react-konva';
import axios from 'axios';
import {ShowPopupContext, PopupContentContext} from './context';
import {PopupContent} from './popupContent';


export class PopupLayer extends Component {
    constructor(props){
        super(props);

        this.state = ({
            popUpWindowWidth: this.props.stageWidth * 0.7,
            popUpWindowHeight: this.props.stageHeight * 0.7,
        })
    }

    getDetailfromURL = (url) => {
        axios.get(url)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
        return (
            <ShowPopupContext.Consumer>
                {({showPopup, toggleshowPopup}) => (
                    <Layer
                        // 背景の位置
                        x={-this.props.stageX}
                        y={-this.props.stageY}
                        visible={showPopup}>

                        {/* skillMapを覆い隠すように背景をセット */}
                        <Rect
                            fill={"gray"}
                            opacity={0.8}
                            width={this.props.stageWidth}
                            height={this.props.stageHeight}
                            onClick={toggleshowPopup}/>

                        <PopupContentContext.Consumer>
                            {({popupContentUrl}) => (
                                // ポップアップの中身
                                <Group
                                    // ポップアップの内容の位置
                                    x={this.props.stageWidth/2}
                                    y={this.props.stageHeight/2}>
                                    <Rect
                                        fill={"white"}
                                        width={this.state.popUpWindowWidth}
                                        height={this.state.popUpWindowHeight}
                                        offsetX={this.state.popUpWindowWidth/2}
                                        offsetY={this.state.popUpWindowHeight/2}>
                                    </Rect>
                                    <PopupContent 
                                        width={this.state.popUpWindowWidth}
                                        height={this.state.popUpWindowHeight}
                                        detailUrl={popupContentUrl}/>
                                </Group>
                            )}
                        </PopupContentContext.Consumer>
                    </Layer>
                )}
            </ShowPopupContext.Consumer>
        );
    }
    
}