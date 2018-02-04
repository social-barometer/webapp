import GoogleLogin from '../components/GoogleLogin'
export default (props) => (
        <div className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout__title">Dashboard</span>
                <div className="mdl-layout-spacer"></div>
                <div>
                    <form action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="sample1"/>
                            <label className="mdl-textfield__label" htmlFor="sample1">Event Name</label>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="sample1"/>
                        <label className="mdl-textfield__label" htmlFor="sample1">Keyword</label>
                        </div>
                    </form>
                </div>
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                    <i className="material-icons">search</i>
                </label>
                {/* The three dots on right top corner ends */}
                <button id="demo-menu-lower-right"
                        className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">more_vert</i>
                </button>

                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    htmlFor="demo-menu-lower-right">
                    <li className="mdl-menu__item">Option</li>
                    <li className="mdl-menu__item">Option 2</li>
                </ul>
                {/* The three dots on right top corner ends */}
                <GoogleLogin>
                    </GoogleLogin>
            </div>
            <style jsx>{`
                .mdl-layout__header-row{
                background: #fff;
                color: #000;
                }
                .mdl-textfield.mdl-js-textfield{
                width: 100px;

                }
            `}</style>
    </div>
)