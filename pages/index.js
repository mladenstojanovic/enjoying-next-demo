import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>enjoy.ing cocktails home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our cocktails recipe website
        </h1>

        <p className={styles.description}>
          <Link href="/cocktails">
            <a>Go to the cocktails page!</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.enjoying.rs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by enjoy.ing
        </a>
      </footer>
    </div>
  );
}
