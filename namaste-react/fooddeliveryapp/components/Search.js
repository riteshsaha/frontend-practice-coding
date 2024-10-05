import { useState } from "react";

const Search = ({ restaurantData, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchResults = () => {
    const searchedRestaurantsByName = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const searchedRestaurantsByFood = restaurantData.filter((restaurant) =>
      restaurant.cuisines.some((food) =>
        food.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    // Append both search results using shallow copy
    const searchedRestaurants = [
      ...searchedRestaurantsByName,
      ...searchedRestaurantsByFood,
    ];
    const uniqueRestaurants = searchedRestaurants.filter(
      (restaurant, index, self) =>
        index === self.findIndex((r) => r.id === restaurant.id)
    );
    setRestaurants(uniqueRestaurants);
  };

  return (
    <div className="search">
      <input
        className="search-text"
        type="text"
        placeholder="Search any restaurants and food"
        value={searchText}
        onChange={handleInputChange}
      ></input>
      <button className="search-btn" onClick={handleSearchResults}>
        Search
      </button>
    </div>
  );
};

export default Search;
