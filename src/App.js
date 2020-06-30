import React from "react";
//styles list from styles.js
import styles from "./styles";
// Components
import PerfumeList from "./components/PerfumeList";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>L'arHomme</h1>
        <h4 style={styles.text}> Aromas of the World</h4>
        <img
          alt="perfume shop"
          src="https://www.ooobs.com.hk/images/articlenew2019/Apr/5Apr2-2-2019.jpg"
          style={styles.shopImage}
        />
      </div>
      <PerfumeList />
    </div>
  );
}

export default App;
