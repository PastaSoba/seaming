import React from 'react';
import { CustomedHeader, CustomedFooter } from './template';
import { TopPage } from './toppage';
import { StudyPage } from './studypage';
import { MissionPage } from './missionPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Base = () => {
    return (
        <BrowserRouter>
            <CustomedHeader/>
            <Switch>
                <Route exact path='/' component={TopPage}/>
                <Route exact path='/study' component={StudyPage}/>
                <Route exact path='/mission' component={MissionPage}/>
            </Switch>
            <CustomedFooter/>
        </BrowserRouter>
    );
}