import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Styles.module.css";

const Cocktails = ({ cocktails }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>All Cocktails</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Top cocktails</h1>
        <div className={styles.grid}>
          {cocktails &&
            cocktails.length &&
            cocktails.map((cocktail) => (
              <Link
                href="/cocktails/[id]"
                as={`/cocktails/${cocktail.idDrink}`}
                key={cocktail.idDrink}
              >
                <a className={styles.card}>
                  <h3>{cocktail.strDrink}</h3>
                </a>
              </Link>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.description}>
          <Link href="/">
            <a>To home page!</a>
          </Link>
        </p>
      </footer>
    </div>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get cocktails.
  // You can use any data fetching library
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
  const parsedRes = await res.json();
  const cocktails = parsedRes.drinks.slice(0, 9);

  // By returning { props: cocktails }, the Cocktails component
  // will receive `cocktails` as a prop at build time
  return { props: { cocktails } };
}

export default Cocktails;
