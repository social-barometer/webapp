import React, { Component } from 'react'
import Head from 'next/head'
import Card from './Card'
import SmCard from './SmallCard'
import Header from './Header'
import firebase, { auth, provider } from '../firebase'

import Link from 'next/link'

class Layout extends Component {



    constructor() {
        super()

        this.state = {
            user: null
        }

        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => user && this.setState({ user }))
    }

    async login () {
        try {
            const result = await auth.signInWithPopup(provider)
            const user = {
                name: result.user.displayName,
                twitter: {
                    token: result.credential.accessToken,
                    secret: result.credential.secret,
                }
            }
            this.setState({ user })
            console.log(`Welcome ${user.name}!`)
        } catch(e) {
            throw new Error(e)
        }
    }

    async logout() {
        try {
            await auth.signOut
            this.setState({ user: null })
        } catch(e) {
            throw new Error(e)
        }
    }

    render() {
        return (
            <div className="wrapper">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
                <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css" />
                <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css" />
            </Head>
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                    <Header user={this.state.user} login={this.login} logout={this.logout} />
                    <div className="mdl-layout__drawer">
                        <span className="mdl-layout-title"><b>Social Barometer</b></span>
                        <nav className="demo-navigation mdl-navigation">
                            <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
                            <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">dashboard</i>Dashboard</a>
                            <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
                            <Link href="/ajaxChartExample">
                                <a className="mdl-navigation__link">Chart example</a>
                            </Link>
                            <Link href="/crimeMapExample">
                                <a className="mdl-navigation__link">Crime map example</a>
                            </Link>
                            <Link href="/eventFormPage">
                                <a className="mdl-navigation__link">Event Form</a>
                            </Link>
                            <Link href="/auth">
                                <a className="mdl-navigation__link">Authentication</a>
                            </Link>
                            <Link href="/tweets">
                                <a className="mdl-navigation__link">Tweets</a>
                            </Link>
                            <div className="mdl-layout-spacer"></div>
                        </nav>
                    </div>
                    <div>
    
                    </div>
                    <main className="mdl-layout__content">
                        {/* ONLY { this.props.children } here  */}
                        { this.props.children }
                    </main>
                </div>
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
    }
}

export default Layout