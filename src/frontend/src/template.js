import React from 'react';
import brandimage from './brandimage.svg'
import {BrowserRouter, Link, Route} from 'react-router-dom';

// テンプレートを集めておく

export const Navbar = () => {
    return (
        /* ナビゲーションバー */
        <nav class="navbar is-info" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <Link to = '/'>
                        <img src={brandimage} width="200"/>
                    </Link>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <Link to='/study' class="navbar-item">
                        Study
                    </Link>
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                <strong>Log in</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer_columns_overall">
                <div class="columns">
                    <div class="column">
                        <h5 class="subtitle is-5">Searac</h5>
                        <ul>
                            <li><Link to='/study'>Searac Study</Link></li>
                        </ul>
                    </div>
                    <div class="column">
                        <h5 class="subtitle is-5">コミュニティ</h5>
                        <ul>
                            <li>開発者ブログ</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h5 class="subtitle is-5">サポート</h5>
                        <ul>
                            <li>不具合を報告する</li>
                            <li>よくある質問</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h5 class="subtitle is-5">運営情報</h5>
                        <ul>
                            <li>運営について</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}