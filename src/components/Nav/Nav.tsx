/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"

export function Nav() {
  return (
    <>
      <nav className="Nav">
        <ul className="Nav-list">
          <li>
            <Link href="/" passHref>
              <a className="Nav-link">Welcome</a>
            </Link>
          </li>
          <li>
            <Link href="/ssr" passHref>
              <a className="Nav-link">SSR</a>
            </Link>
          </li>
          <li>
            <Link href="/ssg" passHref>
              <a className="Nav-link">SSG</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .Nav {
          text-align: left;
        }

        .Nav-list {
          display: flex;
          list-style-type: none;
        }

        .Nav-link {
          margin-right: 1rem;
          color: #ff4858;
        }
      `}</style>
    </>
  )
}
