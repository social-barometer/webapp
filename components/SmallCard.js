export default (props) => (
     <div className="small-card-main">
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand">
                        <h2 className="mdl-card__title-text">Update</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            View Updates
                        </a>
                    </div>
                </div>

        <style jsx global>{`

        .demo-card-square.mdl-card {
          width: 300px;
          height: 100px;
        }
        .demo-card-square > .mdl-card__title {
          color: #fff;
          background:
            url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
        }

        `}</style>
    </div>
)
