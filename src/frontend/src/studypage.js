import React from 'react';
import { Skillmap } from './skillmap';
import { Sidebar } from './sidebar';
import {PopupContentContext} from './context'

export class StudyPage extends React.Component {
    constructor(props){
        super(props);

        this.setUrl = (url) => {
            this.setState({popupContentUrl: url});
        }

        this.state = {
            popupContentUrl: "",
            setUrl: this.setUrl,
        }
    }

    render(){
        return (
            <div>
                <div class="columns is-gapless">
                    <div style={{margin: 10}} class="column is-3">
                        <Sidebar detailUrl={this.state.popupContentUrl}/>
                    </div>
                    <div class="column is-9 skillmap">
                        <div class="skillmap">
                            <PopupContentContext.Provider value={this.state}>
                                <Skillmap/>
                            </PopupContentContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}