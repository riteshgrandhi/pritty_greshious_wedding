import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import { Container } from "../components/Container";
import styles from "./../styles/App.module.css";
import { Events } from "../components/Events";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.app}>
      <Loader isLoading={isLoading} />
      <Container refs={[headerRef, eventRef]}>
        <Header
          ref={headerRef}
          onLoaded={() => {
            setIsLoading(false);
          }}
        />
        <Events />
      </Container>
    </div>
  );
}

export default App;
