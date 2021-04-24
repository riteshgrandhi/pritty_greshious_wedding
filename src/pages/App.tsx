import React, { useState } from "react";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import { Events } from "../components/Events";
import { Container } from "../components/Container";
import styles from "./../styles/App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.app}>
      <Loader isLoading={isLoading} />
      <Container>
        <Header
          onLoaded={() => {
            setIsLoading(false);
          }}
        />
        <Events
          index={1}
          onLoaded={() => {
            // setIsLoading(false);
          }}
        />
      </Container>
    </div>
  );
}

export default App;
