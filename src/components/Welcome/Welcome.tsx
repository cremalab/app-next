import Image from "next/image"
import styles from "./Welcome.module.css"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export function Welcome(_: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome</h1>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Crema Beaker Logo"
            height={300}
            width={300}
          />
        </div>

        <p>
          Edit <code>src/components/Welcome/Welcome.tsx</code> and save to
          reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about React
        </a>
        <a
          className={styles.link}
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Next.js
        </a>
      </header>
    </div>
  )
}
