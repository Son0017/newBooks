import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { SingleCocktail } from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import UserLog from "./components/UserLog";
import { useFetch } from "./hooks/useFetch";
import AdminSee from "./components/AdminSee";
import Uncheckad from "./components/Uncheckad";
import CreateCotegory from "./components/CreateCotegory";
import AdminLog from "./components/AdminLog";
import UserList from "./components/UserList";
import SavedBooks from "./components/SavedBooks";
import { useBooksProvider } from "./context/book_context";

function App() {
  const { adminId, error, userOne } = useBooksProvider();
  const { getCategory } = useFetch();
  useEffect(() => {
    getCategory("http://localhost:8090/api/category/all");
  }, [userOne]);

  return (
    <Router>
      <Navbar />
      {adminId && !error && <AdminSee />}
      {!error && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
          <Route path="/singlecocktail" element={<SingleCocktail />} />
          <Route path="/userlogup" element={<UserLog />} />
          <Route path="/box" element={<SavedBooks user={userOne} />} />
          <Route path="/adminlog" element={<AdminLog />} />
          {adminId && (
            <>
              <Route path="/cheaked" element={<Uncheckad />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/createcategory" element={<CreateCotegory />} />
            </>
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      )}
      {error && <Error></Error>}
    </Router>
  );
}

export default App;
