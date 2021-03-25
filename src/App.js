import './App.css';
import React, { useState, useEffect } from "react"
import AppHeader from "./header.js"
import Search from "./search.js";
import JobCards from "./joblist.js"
export default function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="main-container">
          <AppHeader/>
          <Search/>
          <JobCards/>
        </div>
      </div>
    </div>
  );
}
