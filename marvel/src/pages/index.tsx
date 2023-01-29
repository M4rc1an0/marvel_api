import Head from 'next/head'
import Introduction from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marvel API</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        ></link>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Introduction />
    </>
  );
}
