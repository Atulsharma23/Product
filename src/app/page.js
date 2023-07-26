"use client";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Fetch Data with Api in client component</h1>
        <Link href="/productlist">Go to Product Page</Link>
      </div>
    </main>
  );
}
