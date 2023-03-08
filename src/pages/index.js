import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const url = "https://api.artic.edu/api/v1/artworks/search?q=cats";

  const [paintings, setPaintings] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPaintings(data);
        console.log(paintings);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
      </main>
    </>
  );
}
