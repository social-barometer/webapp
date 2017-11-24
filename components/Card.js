export default (props) => (
  <div className="demo-card-wide mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title">
        {props.title}
      </h2>
    </div>
    <div className="mdl-card__supporting-text">
      {props.text}
    </div>
  </div>
)
