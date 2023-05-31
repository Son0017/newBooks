import React from "react";
import CocktailList from "../components/CocktailList";
import { useState } from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const category = useSelector((state) => state.categoryList);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [changeCat, setChangeCat] = useState("");
  return (
    <main style={{ position: "relative" }}>
      <div className="dropdown">
        <button className="dopbtn" onClick={handleOpen}>
          Category
        </button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button
                onClick={() => {
                  setChangeCat("");
                }}
              >
                All
              </button>
            </li>
            {category &&
              category.map((item) => {
                return (
                  <li className="menu-item" key={item.id}>
                    <button
                      onClick={() => {
                        setChangeCat(item.name);
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : null}
      </div>
      <CocktailList changeCat={changeCat} />
    </main>
  );
};

export default Home;