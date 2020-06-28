import React from "react";
import logo from "./logo.svg";
import "./App.css";

const styles = {
  text: { textAlign: "center" },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  perfumeImage: { width: "200px", height: "200px" },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  perfume: { margin: "20px" },
};

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
      <div style={styles.list}>
        <div style={styles.perfume}>
          <img
            alt="Boadicea Perfume"
            src="https://fimgs.net/mdimg/perfume/375x500.20516.jpg"
            style={styles.perfumeImage}
          />
          <p style={styles.text}>Boadicea the Victorious</p>
          <p style={styles.text}>Ardent</p>
          <p style={styles.text}>85 KD</p>
        </div>
        <div style={styles.perfume}>
          <img
            alt="Xerjoff: More than Words"
            src="https://fimgs.net/mdimg/perfume/375x500.16450.jpg"
            style={styles.perfumeImage}
          />
          <p style={styles.text}>Xerjoff</p>
          <p style={styles.text}>More than Words</p>
          <p style={styles.text}>69 KD</p>
        </div>
        <div style={styles.perfume}>
          <img
            alt="Amouroud: Dark Orchid"
            src="https://fimgs.net/mdimg/perfume/375x500.32584.jpg"
            style={styles.perfumeImage}
          />
          <p style={styles.text}>Amouroud</p>
          <p style={styles.text}>Dark Orchid</p>
          <p style={styles.text}>69 KD</p>
        </div>
        <div style={styles.perfume}>
          <img
            alt="Maison Margiela: 'REPLICA' By the Fireplace"
            src="https://beidounonline.com/uploads/products/520758831554206369.jpg"
            style={styles.perfumeImage}
          />
          <p style={styles.text}>Maison Margiela</p>
          <p style={styles.text}>'REPLICA' By the Fireplace </p>
          <p style={styles.text}>41 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
