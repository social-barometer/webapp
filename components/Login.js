export default ({ user, login, logout }) => (
    <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
        onClick={user ? logout : login}
        >{user ? "Sing Out" : "Sign in"}</button>
)