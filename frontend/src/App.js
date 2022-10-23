// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import JournalPage from "./pages/JournalPage/JournalPage";
import ProgressPage from "./pages/ProgressPage/ProgressPage";
import AuthorPage from "./pages/AuthorPage/AuthorPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";

function App() {

  const [entries, setEntries] = useState ([])

  function quickPass(entry){
    let newPasses = [entry, ...entries];
    setEntries(newPasses);
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category" element={<PrivateRoute><CategoryPage CategoryPageProperty = {entries}/></PrivateRoute>} />
        <Route path="/journal" element={<PrivateRoute><JournalPage JournalPageProperty = {entries}/></PrivateRoute>} />
        <Route path="/progress" element={<PrivateRoute><ProgressPage ProgressPageProperty = {entries}/></PrivateRoute>} />
        <Route path="/author" element={<PrivateRoute><AuthorPage AuthorPageProperty = {entries}/></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
