import styles from "./page.module.css";
import { KeyboardAnimation } from "./components/KeyboardAnimation";
import { OfferingsSection } from "./components/OfferingsSection";
import { OtherOfferingsSection } from "./components/OtherOfferingsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <OfferingsSection />
      <KeyboardAnimation />
      <OtherOfferingsSection />
    </main>
  );
}
