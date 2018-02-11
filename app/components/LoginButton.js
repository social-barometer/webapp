export default ({ user, login, logout }) => (
  <li>
    <a
      href="#"
      onClick={user ? logout : login}
      >{user ? "Sing Out" : "Sign in"}</a>
  </li>
)