import React, {Component} from 'react';


export class SidebarContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.name !== ""){
            return (
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title is-centered">
                            {this.props.name}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p class="is-size-6 has-text-weight-semibold">概要</p>
                            <p>{this.props.description}</p>
                        </div>
                        <div class="content">
                            <p class="is-size-6 has-text-weight-semibold">この技術を学ぶ理由</p>
                            <p>{this.props.description}</p>
                        </div>
                        <div class="content">
                            <p class="is-size-6 has-text-weight-semibold">リソース</p>
                            <a class="content" href={this.props.url}>
                                wikipediaページはこちら
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
        return (null)
    }
}