// Webpack need entry point called index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{}}>Bali Pizza Co.</h1>
    </header>
  );
}

// React will not render true or false
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        // React Fragment
        <React.Fragment key={"menu"}>
          <p>
            Authentic Italian cuisine, 6 creative dishes to choose from, All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {/* for each not working because it just iterating the data, but here we need new array with jsx, that's why we need map */}
            {pizzas.map((it) => (
              <Pizza pizzaObj={it} key={it.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu, please come later</p>
      )}
    </main>
  );
}

// Props are immutable -> read only
// If changes props it will affect the parent component creating side effects (not pure)
// Side effect appear when mutate some data that outside the current function
// React component must be pure, same input same ourput and there is side effect
// One way data flow is about the data (props) is from the high hierarchy into the bottom one
// There is two way data flow adopted by angular (but i think it's less efficient and difficult to maintain)
// Component should never mutate any data that outside the function
function Pizza(props) {
  const { photoName, name, ingredients, price, soldOut } = {
    ...props.pizzaObj,
  };
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) alert("We are open");
  else alert("Sorry, we are closed");
  return (
    <footer className="footer">
      {isOpen && <Order closeHour={closeHour} openHour={openHour} />}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Restaurant is Open from {openHour}:00 until {closeHour}:00. Come visit
        us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18 -> to render the app
// React Strict Mode is during developemnt render the component twice and check the depecrated library
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);

// JSX or TSX declarative syntax to describe what component look like and how they work. (Extention of javascript), define a ui based on state and props
// Babel convert jsx -> js
// if we use the js or ts, we need to create the react.CreateElement always
// Basically JSX just like html but we can enter javascript mode
