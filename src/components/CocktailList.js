import React from "react";
import Cocktail from "./Cocktail";
import { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

function useGetBooks(changeCat = "") {
  const [books, setBooks] = useState([]);
  const { getSaveBooks } = useFetch();
  async function name() {
    let data = await getSaveBooks(
      "http://localhost:8090/api/book/allActiveBooks"
    );
    data = data.filter((item) => {
      if (item.category && changeCat.length > 0) {
        return item.category.name.includes(changeCat);
      } else if (changeCat.length === 0) {
        return item;
      }
    });
    setBooks(data);
  }
  useEffect(() => {
    name();
  }, [changeCat]);
  return books;
}

const CocktailList = ({ changeCat }) => {
  const books = useGetBooks(changeCat);

  return (
    <section className="section">
      <h2 className="section-title">Books</h2>
      <div className="cocktails-center">
        {books.map((item) => {
          return (
            <article key={item.id} className="cocktail">
              <Cocktail item={item} coc={true} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
