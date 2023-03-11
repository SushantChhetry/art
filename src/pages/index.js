import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Result from "@/components/Result";

export default function Home() {
  const url =
    "https://api.artic.edu/api/v1/artworks/search?q=abstract&fields=id,title,image_id";

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = useRef(""); //used to avoid unncessary rendering
  const [query, setQuery] = useState("");

  //Add objects to paintings with the img address and title using the getImage function

  const handleSubmit = (event) => {
    //handle form submit
    event.preventDefault();
    setQuery(search.current.value);
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
      })
      .catch((err) => {
        console.log(`Error fetching data ${err}`);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

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
      <main className="body-wrapper">
        <h1>Art.</h1>
        <p>Chicago Institute of Art</p>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={search} />
          <input type="submit" />
        </form>
        <Result data={data} />
      </main>
    </>
  );
}
