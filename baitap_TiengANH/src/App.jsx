import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./exercise-1-class/Contact";
import { INITIAL_CONTACTS } from "./exercise-1-class/data";
import ContactList from "./exercise-1-class/ContactList";
function App() {
  return <ContactList/>
}

export default App;
