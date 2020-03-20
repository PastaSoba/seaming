import React from 'react';
import { Navbar, Footer } from './template';
import { topPage } from './toppage';
import { studyPage } from './studypage';
import { BrowserRouter, Route } from 'react-router-dom';

export const Base = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Route path='/' exact component={topPage}/>
                <Route path='/study' exact component={studyPage}/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}