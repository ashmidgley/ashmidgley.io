import styles from "./page.module.css";

import {
  Landing,
  Nav,
  Offerings,
  OtherOfferings,
  SelectedWork,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Offerings />
      <SelectedWork />
      <OtherOfferings />
      <Testimonials />
    </main>
  );
}
