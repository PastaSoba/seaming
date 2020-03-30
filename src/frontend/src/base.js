import React from 'react';
import { Navbar, Footer } from './template';
import { topPage } from './toppage';
import { studyPage } from './studypage';
import { visionPage } from './visionPage';
import { BrowserRouter, Route } from 'react-router-dom';

export const Base = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Route path='/' exact component={topPage}/>
            <Route path='/study' exact component={studyPage}/>
            <Route path='/vision' exact component={visionPage}/>
            <Footer/>
        </BrowserRouter>
    );
}