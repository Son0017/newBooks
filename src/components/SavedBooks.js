import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Cocktail from "./Cocktail";
function SavedBooks({ user }) {
  const [books, setBooks] = useState([]);
  const { deleteUser, getSaveBooks } = useFetch();
  const [update, setUpdate] = useState(true);
  async function getBooks(userid) {
    const data = await getSaveBooks(
      `http://localhost:8090/api/savedBook/getAllByUserId/${userid}`
    );
    setBooks(data);
  }
  useEffect(() => {
    getBooks(user);
  }, [user]);

  return (
    <section className="section">
      <h2 className="section-title">Save Books</h2>
      <div className="cocktails-center">
        {books.length > 0 ? (
          books.map((item) => {
            return (
              <article key={item.id} className="cocktail">
                <article>
                  <Cocktail item={item.book} coc={false} />
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}
                    onClick={() => {
                      deleteUser(
                        `http://localhost:8090/api/savedBook/delete/${item.id}`
                      );
                      setUpdate(!update);
                    }}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                  >
                    buy
                  </button>
                </article>
              </article>
            );
          })
        ) : (
          <h1>No any book</h1>
        )}
      </div>
    </section>
  );
}

export default SavedBooks;
