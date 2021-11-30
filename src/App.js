import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const randomContact = () => {
    const random = Math.floor(Math.random() * contactsJSON.length);

    setContacts(contacts.concat(contactsJSON[random]));
  };

  const sortByPop = () => {
    const sortedPop = contacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    setContacts(sortedPop.concat());
  };

  const sortByName = () => {
    const sortedNames = contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    setContacts(sortedNames.concat());
  };

  const deleteCelebrity = (celebrityId) => {
    const filteredCelebrity = contacts.filter((celebrity) => {
      return celebrity.id !== celebrityId;
    });

    setContacts(filteredCelebrity);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className="btn-random" onClick={() => randomContact()}>
        Add Random Contact
      </button>
      <button className="btn-sort-pop" onClick={() => sortByPop()}>
        Sort by popularity
      </button>
      <button className="btn-sort-name" onClick={() => sortByName(contacts)}>
        Sort by name
      </button>
      <table className="table-head">
        <tr>
          <th className="celebPic">Picture</th>
          <th className="celebName">Name</th>
          <th className="celebPop">Popularity</th>
          <th className="celebOscar">Won Oscar</th>
          <th className="celebEmmy">Won Emmy</th>
          <th className="celebDel">Actions</th>
        </tr>
      </table>

      {contacts.map((celebrity) => {
        return (
          <table className="table-celeb">
            <tr>
              <td className="celebPic">
                <img
                  src={celebrity.pictureUrl}
                  alt="celebrity portrait"
                  srcset=""
                />
              </td>
              <td className="celebName">{celebrity.name}</td>
              <td className="celebPop">{celebrity.popularity.toFixed(2)}</td>
              <td className="celebOscar">{celebrity.wonOscar && <p>🏆</p>}</td>
              <td className="celebEmmy">{celebrity.wonEmmy && <p>🏆</p>}</td>
              <td className="celebDel">
                <button
                  className="btn-delete"
                  onClick={() => deleteCelebrity(celebrity.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
