import React from 'react';
import { Skillmap } from './skillmap';

export const studyPage = () => {
    return (
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">
                        Study Page
                    </h1>
                    <p class="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>
                </div>
            </section>

            <Skillmap/>
        </div>
    )
}