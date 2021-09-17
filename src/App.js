import { useState } from "react";
import "./styles.css";

var dosas = [
  { name: " MTR, near Lalbhag", rating: "5/5" },
  {
    name: "CTR, Malleshwara",
    rating: "4.5/5"
  }
];

var biryanis = [
  {
    name: "Paradise Biryani, JP Nagar",
    rating: "4.5/5"
  },
  { name: "Meghana Foods, Jaynagar/Marathalli", rating: "5/5" }
];

var meals = [
  { name: "Nagarjuna, Marathahalli", rating: "4.5/5" },
  {
    name: "Nandhana Palace, JP Nagar",
    rating: "3.5/5"
  }
];

var recommendaions = {
  Dosas: dosas,
  Biryanis: biryanis,
  Meals: meals
};

var categories = Object.keys(recommendaions);

export default function App() {
  var [ratings, setRatings] = useState([]);

  function buttonClickHandler(category) {
    setRatings(recommendaions[category]);
  }

  return (
    <div className="App">
      <h1>
        <span role="img">🥣</span> GoodFood{" "}
      </h1>
      <small> Checkout some restaurant recommendations </small>
      <div>
        {categories.map((item) => {
          return (
            <button onClick={() => buttonClickHandler(item)} key={item}>
              {item}
            </button>
          );
        })}
      </div>

      <hr />

      <div>
        <ul style={{ padding: 0 }}>
          {ratings.map((item) => {
            return (
              <li key={item.name}>
                <div style={{ fontSize: "larger" }}> {item.name} </div>
                <div style={{ fontSize: "smaller" }}> {item.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
