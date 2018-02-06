export default (props) => (
    <div className = "large-card-main">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
            <h2 className="mdl-card__title">
                {props.title}
            </h2>
        </div>
        <div className="mdl-card__supporting-text">
            Daily tweets
            {props.text}
        </div>
        <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
               <i className="material-icons">update</i> updated 4 minutes ago
            </a>
            <div className="mdl-layout-spacer"></div>
        </div>
        </div>

        <style jsx global>{`
      .demo-card-wide > .mdl-card__title {
        height: 176px;
        }
      .demo-card-wide.mdl-card {
          width: 400px;
          height: 140px;

        }
      .material-icons {
        padding-right: 10px;
        }
      .large-card-main{
        padding-left: 10px;
      }
    `}</style>
    </div>
)
