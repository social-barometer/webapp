import Link from 'next/link'

/**
 * Use this instead of NavItem from react-bootstrap
 *
 * @param {Object} props – React properties for the element
 * @returns {Object} – React component
 */
export default ({ href, children }) => (
  <li>
    <Link href={href}><a>{ children }</a></Link>
  </li>
)