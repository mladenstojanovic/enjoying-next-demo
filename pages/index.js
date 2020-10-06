import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News home</title>
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
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
