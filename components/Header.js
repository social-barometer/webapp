import Login from '../components/Login'
import EventForm from '../components/EventForm'

export default ( {loginCallback} ) => (
        <div className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout__title">Dashboard</span>
                <div className="mdl-layout-spacer"></div>
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
                <Login />
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