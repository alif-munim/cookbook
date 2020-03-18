import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  const APP_ID = "659f4297";
  const APP_KEY = "5ac037c6ccf5df606d4422d223f55f49";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form 
      className="search-form"
      onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe-section">
        {recipes.map(entry => (
          <Recipe 
            key={entry.recipe.label}
            title={entry.recipe.label} 
            calories={entry.recipe.calories.toFixed(0)} 
            image={entry.recipe.image}
            ingredients={entry.recipe.ingredients}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
