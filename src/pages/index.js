import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const url =
    "https://api.artic.edu/api/v1/artworks/search?q=abstract&fields=id,title,image_id";

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [paintings, setPaintings] = useState({});

  //Add objects to paintings with the img address and title using the getImage function

  const getImage = (value) => {
    for (let i = 0; i < value.length; i++) {
      console.log(value[i].image_id);
    }
  };
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        getImage(data.data);
      })
      .catch((err) => {
        console.log(`Error fetching data ${err}`);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) return <p>Error!</p>;

  return (
    <>
      <Head>
        <title>Pomodoro App</title>
        <meta name="description" content="Pomodoro app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Art.</h1>
        <p>Chicago Institute of Art</p>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
        {console.log(data.data)}
      </main>
    </>
  );
}
