/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import styles from "./Nav.module.css"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export function Nav(_: Props) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link href="/" passHref>
            <a className={styles.link}>Welcome</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr" passHref>
            <a className={styles.link}>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg" passHref>
            <a className={styles.link}>SSG</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
