import Head from "next/head";
import Link from "next/link";

import { getDatabase } from "lib/notion";
import envVariables from "constants/env";
import { Text } from "components/post";
import styles from "./writings.module.css";

export default function Write({ posts }) {
  return (
    <div>
      <Head>
        <title>nikhil.work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}></header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/writings/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/writings/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(envVariables.notion.databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
