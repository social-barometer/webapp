import Head from 'next/head'
import Card from './Card'
import SmCard from './SmallCard'
import Header from './Header'
export default (props) => (
    <div class="wrapper">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
            <link rel="stylesheet" type="text/css" href="../include/epoch.min.css"/>
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
            <script src="https://d3js.org/d3.v4.js"/>
            <script src="../include/chart.js"/>
            <script src="../include/epoch.min.js"/>
        </Head>
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <Header/>
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
                <main class="mdl-layout__content">
                    <div class="page-content">
                            <div class="mdl-cell mdl-cell-small mdl-cell--12-col mdl-grid">
                                <div class="mdl-cell-small mdl-cell--3-col"><SmCard/></div>
                                <div class="mdl-cell-small mdl-cell--3-col"><SmCard/></div>
                                <div class="mdl-cell-small mdl-cell--3-col"><SmCard/></div>
                                <div class="mdl-cell-small mdl-cell--3-col"><SmCard/></div>
                            </div>
                            <div class="mdl-cell mdl-cell--12-col mdl-grid">
                                <div class="mdl-cell mdl-cell--4-col"><Card/></div>
                                <div class="mdl-cell mdl-cell--4-col"><Card/></div>
                                <div class="mdl-cell mdl-cell--4-col"><Card/></div>
                            </div>
                    </div>
                </main>
            </div>
            { props.children }
        <style jsx global>{`
            .mdl-cell-small{
            padding-left: 12.5px;
            }
            .mdl-layout__drawer{
            background: url("../static/sidebar-2.jpg");
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
            position: absolute;
            display: block;
            background-size: cover;
            }

    `}</style>
    </div>
)
