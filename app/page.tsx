import styles from "./page.module.css";
import { KeyboardAnimation } from "./KeyboardAnimation";
import { OfferingsSection } from "./OfferingsSection";
import { OtherOfferingsSection } from "./OtherOfferingsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <OfferingsSection />
      <KeyboardAnimation />
      <OtherOfferingsSection />
    </main>
  );
}
