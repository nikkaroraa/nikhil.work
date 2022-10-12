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

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col ">
            <h2 className="text-3xl font-semibold">Proof of Work</h2>
            <p className="text-[#ccc]">Every block is a day of work</p>
          </div>

          <div className="flex flex-row items-center space-x-3 rounded-full  bg-gray-700 px-5 py-2">
            <div class="relative">
              <div class="relative h-5 w-5 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-sky-400 opacity-75"></div>
              <div class="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500"></div>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-sm text-[#ccc]">Total Updates</p>
              <p>372</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
