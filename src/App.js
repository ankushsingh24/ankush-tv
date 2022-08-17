import { useState } from "react";
import "./App.css";
import Left from "./components/Left/Left";
import Middle from "./components/Middle/Middle";
import Right from "./components/Right/Right";

function App() {
  const [type, setType] = useState("");
  const [wishlist, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [searchText, setSearchText] = useState("");

  // ===============Save to localStorage====================
  const saveToLocalStorage = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  };

  // ===================Set as favorite=======================
  function setFav({ mov, type }) {
    console.log(mov, type);
    const alreadyWishListed = wishlist.find((wish) => wish.mov.id === mov.id);
    if (alreadyWishListed) return;
    const temp = [{ mov, type }, ...wishlist];
    setWishList(temp);
    saveToLocalStorage(temp);
    setType(temp);
  }
  // ======================Remove from favorite====================
  const removeWishHandler = (id) => {
    const temp = wishlist.filter((tmp) => tmp.mov.id !== id);
    setWishList(temp);
    saveToLocalStorage(temp);
  };
  // =====================Pass search value to middle component from right========================
  function getSearchHandler(text) {
    setSearchText(text);
  }
  return <div className="App"></div>;
}

export default App;
