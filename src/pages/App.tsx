import React, { useState } from "react";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import styles from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.app}>
      <Loader isLoading={isLoading} />
      <div>
        <header>
          <Header
            onLoaded={() => {
              setIsLoading(false);
            }}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
