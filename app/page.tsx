import styles from './page.module.css'
import { KeyboardAnimation } from "./KeyboardAnimation";

export default function Home() {
  return (
    <main className={styles.main}>
      <KeyboardAnimation />
    </main>
  );
}
