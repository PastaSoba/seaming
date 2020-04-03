import React from 'react';
import { Skillmap } from './skillmap';

export const StudyPage = () => {
    return (
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">
                        Study Page
                    </h1>
                </div>
            </section>
            <div class="skillmap">
                <Skillmap/>
            </div>
        </div>
    )
}