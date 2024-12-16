import Image from "next/image";
import styles from "./page.module.css";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to the Chatbot App</h1>
        <Chatbot />
      </main>
    </div>
  );
}