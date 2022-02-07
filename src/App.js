import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer/>
      </div>
    );
}

export default App;