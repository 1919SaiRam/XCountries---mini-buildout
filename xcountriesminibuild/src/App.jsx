// import React, { useEffect, useState } from "react";
// import "./App.css";

// export default function App() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data))
//       .catch((err) => {
//         console.error("Error fetching data", err);
//       });
//   }, []);

//   const flagStyle = {
//     width: "100px",
//     height: "100px",
//   };
//   const cardStyle = {
//     width: "200px",
//     border: "1px solid  black",
//     borderRadius: "10px",
//     margin: "10px",
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   const containerStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   };


  
//   return (
//     <div style={containerStyle}>
//       {countries.map((country) => (
//         <div key={country.cca3} style={cardStyle}>
//           <img
//             src={country.flags.png}
//             // alt={"Flag of ${country.name.common}"}
//             alt={Flag of ${country.name.common}}
//             style={flagStyle}
//           />
//           <h2>{country.name.common}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }









import React, { useEffect, useState } from "react";
import styles from "./App.module.css"; // Import CSS module

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <div className={styles.containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} className={styles.cardStyle}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className={styles.flagStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
