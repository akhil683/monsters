import { useEffect, useState } from "react";

import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  useEffect(() => {
    const fetchCall = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user = await response.json();
      setMonsters(user);
    };
    fetchCall();
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
