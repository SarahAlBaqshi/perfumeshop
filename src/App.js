import React from "react";
import logo from "./logo.svg";
import "./App.css";

import perfumes from "./perfumes"; //Data list from perfumes.js
import styles from "./styles"; //styles list from styles.js

function App() {
  const perfumeList = perfumes.map((perfume) => (
    <div style={styles.perfume} key={perfume.id}>
      <img style={styles.perfumeImage} alt={perfume.name} src={perfume.image} />
      <p style={styles.text}>{perfume.name}</p>
      <p style={styles.text}>{perfume.price} KD</p>
    </div>
  ));
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
      <div style={styles.list}>{perfumeList}</div>
    </div>
  );
}

export default App;
