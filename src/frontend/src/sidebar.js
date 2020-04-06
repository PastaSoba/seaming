import React, {Component} from 'react';
import axios from 'axios';
import { PopupContentContext } from './context';


export class Sidebar extends Component {
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
                    description: "",
                    url: ""
                });
            });
    }

    render(){
        return (
            <h1>{this.state.name}</h1>
        )
    }
}