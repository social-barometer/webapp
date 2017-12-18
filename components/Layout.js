import Head from 'next/head'
import Card from './Card'

export default (props) => (
    <div class="wrapper">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
        </Head>
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                        <span class="mdl-layout__title">Dashboard</span>
                        <div class="mdl-layout-spacer"></div>
                        <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
                            <i class="material-icons">search</i>
                        </label>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title"><b>Social Barometer</b></span>
                    <nav class="demo-navigation mdl-navigation">
                        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
                        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">dashboard</i>Dashboard</a>
                        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
                        <div class="mdl-layout-spacer"></div>
                    </nav>
                </div>
                <div>

                </div>
                <main class="mdl-layout__content mdl-color--grey-100">
                    <div class="page-content">
                        <div class="mdl-grid demo-content">
                            <div class="mdl-color--transparent mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                                <div class="mdl-cell mdl-cell--4-col"><Card/></div>
                                <div class="mdl-cell mdl-cell--4-col"><Card/></div>
                                <div class="mdl-cell mdl-cell--4-col"><Card/></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            { props.children }

        <style jsx global>{`
    `}</style>
    </div>
)
