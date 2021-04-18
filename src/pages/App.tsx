import React, { useState } from "react";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import styles from "./App.module.css";
import { Events } from "../components/Events";
import { Container } from "../components/Container";

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
        {/* <Events onLoaded={() => {}} />
        <Events onLoaded={() => {}} /> */}
      </Container>
    </div>
  );
}

export default App;
