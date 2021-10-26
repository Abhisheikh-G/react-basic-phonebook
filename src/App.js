import { useState } from "react";

function EntryForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phoneNumber });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        submit
      </button>
    </form>
  );
}

function DisplayEntries({ entries }) {
  return (
    <table style={{ marginTop: "1em", width: 300 }}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody style={{ marginTop: ".5em" }}>
        {entries.map((entry) => (
          <tr key={`${entry.firstName} ${entry.lastName}`}>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <DisplayEntries entries={entries} />
    </div>
  );
}

export default App;
