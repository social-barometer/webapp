
export default (props) => (
        <div class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout__title">Dashboard</span>
                <div class="mdl-layout-spacer"></div>
                <div>
                    <form action="#">
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="text" id="sample1"/>
                            <label class="mdl-textfield__label" for="sample1">Event Name</label>
                        </div>

                        <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" id="sample1"/>
                        <label class="mdl-textfield__label" for="sample1">Keyword</label>
                        </div>
                    </form>
                </div>
                <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
                    <i class="material-icons">search</i>
                </label>
                {/* The three dots on right top corner ends */}
                <button id="demo-menu-lower-right"
                        class="mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">more_vert</i>
                </button>

                <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    for="demo-menu-lower-right">
                    <li class="mdl-menu__item">Option</li>
                    <li class="mdl-menu__item">Option 2</li>
                </ul>
                {/* The three dots on right top corner ends */}
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