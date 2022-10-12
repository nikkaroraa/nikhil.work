import Head from "next/head";
import Link from "next/link";

import { getDatabase } from "lib/notion";
import envVariables from "constants/env";
import { Text } from "components/post";
import styles from "./index.module.css";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>nikhil.work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}></header>

        <div className="flex flex-col space-y-3">
          <h2>POW</h2>
        </div>
      </main>
    </div>
  );
}
