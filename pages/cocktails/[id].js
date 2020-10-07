import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Styles.module.css";

const helpArr = new Array(15).fill().map((_, i) => i + 1);

const Cocktail = ({ cocktail }) => {
  const ingredients = [];
  helpArr.forEach((num) => {
    if (cocktail[`strIngredient${num}`]) {
      ingredients.push({
        ingredient: cocktail[`strIngredient${num}`],
        measure: cocktail[`strMeasure${num}`],
      });
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>{cocktail.strDrink}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/cocktails">
        <a className={styles.backButton}>{"< All Cocktails"}</a>
      </Link>

      <main className={styles.main}>
        <h1 className={styles.title}>{cocktail.strDrink}</h1>
        <div className={styles.single}>
          <img src={cocktail.strDrinkThumb} />
          <p className={styles.description}>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li className={styles.description} key={`${ingredient}-${i}`}>
                {ingredient.measure} {ingredient.ingredient}
              </li>
            ))}
          </ul>
          <p className={styles.description}>{cocktail.strInstructions}</p>
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

export default Cocktail;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get cocktails
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
  const parsedRes = await res.json();
  const cocktails = parsedRes.drinks.slice(0, 9);

  // Get the paths we want to pre-render based on cocktails
  const paths = cocktails.map((cocktail) => ({
    params: { id: cocktail.idDrink },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the cocktail `id`.
  // If the route is like /cocktails/1, then params.id is 1
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const cocktail = await res.json();

  // Pass cocktail data to the page via props
  return { props: { cocktail: cocktail.drinks[0] } };
}
