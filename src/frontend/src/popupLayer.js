import React, {Component} from 'react';
import {Layer, Rect} from 'react-konva';
import {ShowPopupContext} from './context';


export class PopupLayer extends Component {
    constructor(props){
        super(props);

        this.state = ({
            popUpWindowWidth: this.props.stageWidth * 0.7,
            popUpWindowHeight: this.props.stageHeight * 0.7,
        })
    }

    render(){
        return (
            <ShowPopupContext.Consumer>
                {({showPopup, toggleshowPopup}) => (showPopup &&
                    <Layer
                        x={-this.props.stageX}
                        y={-this.props.stageY}>

                        {/* skillMapを覆い隠すように背景をセット */}
                        <Rect
                            fill={"gray"}
                            opacity={0.8}
                            width={this.props.stageWidth}
                            height={this.props.stageHeight}
                            onClick={toggleshowPopup}/>

                        {/* ポップアップの中身 */}
                        <Rect
                            fill={"white"}
                            x={this.props.stageWidth/2}
                            y={this.props.stageHeight/2}
                            width={this.state.popUpWindowWidth}
                            height={this.state.popUpWindowHeight}
                            offsetX={this.state.popUpWindowWidth/2}
                            offsetY={this.state.popUpWindowHeight/2}/>
                    </Layer>
                )}
            </ShowPopupContext.Consumer>
        );
    }
    
}