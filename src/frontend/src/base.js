import React from 'react';
import { CustomedHeader, CustomedFooter } from './template';
import { TopPage } from './toppage';
import { StudyPage } from './studypage';
import { VisionPage } from './visionPage';
import { BrowserRouter, Route } from 'react-router-dom';

export const Base = () => {
    return (
        <Layout>
        <BrowserRouter>
            <CustomedHeader/>
            <Switch>
                <Route exact path='/' component={TopPage}/>
                <Route exact path='/study' component={StudyPage}/>
                <Route exact path='/vision' component={VisionPage}/>
            </Switch>
            <CustomedFooter/>
        </BrowserRouter>
        </Layout>
    );
}