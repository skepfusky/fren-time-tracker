import Head from "next/head";
import CurrentTime from "../components/CurrentTime";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fren Time Tracker</title>
      </Head>
      <CurrentTime />
    </>
  );
}
