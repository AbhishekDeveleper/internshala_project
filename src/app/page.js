import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="Links">
        <a href="/showSchools"> Goto ShowSchools Page </a>{" "}
        <a href="/addSchools"> Goto AddSchool Page </a>{" "}
      </div>{" "}
    </main>
  );
}
