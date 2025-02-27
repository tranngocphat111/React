import { useState } from "react";
import Contact from "./Contact";
import { INITIAL_CONTACTS } from "../exercise-1-class/data";

export default function ContactList() {
  const [data, setData] = useState(INITIAL_CONTACTS);

  function handleDelete(id) {
    setData((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  }

  function handleDeleteAll() {
    setData([]);
  }

  return (
    <>
      <ul>
        {data.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={() => handleDelete(contact.id)}
            />
          );
        })}
      </ul>
      <div>
        <button className="btn" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
    </>
  );
}
