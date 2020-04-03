import React, {Component} from 'react';
import {Layer, Rect, Text} from 'react-konva';
import axios from 'axios';


export class PopupContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            detailUrl: "",

            name: "",
            description: "",
            url: "",
        }

        this.getPopupContent = this.getPopupContent.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.detailUrl !== prevProps.detailUrl){
            this.getPopupContent();
        }
    }

    getPopupContent(){
        this.setState({
            name: "取得中です",
            description: "",
            url: ""
        });

        axios.get(this.props.detailUrl)
            .then((res) => {
                this.setState({
                    detailUrl: this.props.detailUrl,
                    name: res.data.name,
                    description: res.data.description,
                    url: res.data.url
                });
            })
            .catch(() => {
                this.setState({
                    detailUrl: "error",
                    name: "取得できませんでした",
                });
            });
    }

    render(){
        return (
            <Text
                text={this.state.name}
            />
        )
    }
}