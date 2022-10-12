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
          <Link href="/write">
            <a className="text-lg text-gray-300 hover:text-gray-400">write</a>
          </Link>
          <Link href="/pow">
            <a className="text-lg text-gray-300 hover:text-gray-400">
              proof of work
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
