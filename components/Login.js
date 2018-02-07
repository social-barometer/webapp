export default ({ user, login, logout }) => {
    console.log(user, login, logout)  
    return (
    <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
        onClick={user ? logout : login}
        >{user ? "Sing Out" : "Sign in"}</button>
)}