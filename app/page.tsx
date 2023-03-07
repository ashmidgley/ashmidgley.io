import styles from "./page.module.css";
import { KeyboardAnimation } from "./components/KeyboardAnimation";
import { OfferingsSection } from "./components/OfferingsSection";
import { OtherOfferingsSection } from "./components/OtherOfferingsSection";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <OfferingsSection />
      <KeyboardAnimation />
      <OtherOfferingsSection />
    </main>
  );
}
