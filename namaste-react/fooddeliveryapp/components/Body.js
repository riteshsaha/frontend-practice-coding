import Search from "./Search";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

// Resturants data is used from Swiggy API
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// Each element(repeatable) like card inside container should have a unique key.
// It improves Performance as React does not need to re - render all the cards if a new card is added to the list.
const Body = () => {
  /* If we filter restaurants like this using a JS variable, it wont update the UI with filtered restaurants.
        To do this faster, React uses Hooks. It helps DOM manipulation to be much easier as well.*/
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [restaurants, setRestaurants] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isFilterApplied, setIsFilterApplied] = useState(false);
  let [error, setError] = useState(false);

  // useEffect() is called after the Body is rendered in the DOM.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Using allOrigins to pull contents from any page via API (as JSON/P or raw) and avoid Same-origin policy problems.
      const data = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780")}`
      );

      const jsonData = await data.json();
      const fetchedData = JSON.parse(jsonData.contents);

      const restaurantObj = fetchedData?.data?.cards?.find(
        (cardObj) => cardObj.card.card.id === "top_brands_for_you"
      )?.card.card.gridElements.infoWithStyle.restaurants;
      const restaurantData = restaurantObj.map((restaurant) => restaurant.info);

      setAllRestaurants(restaurantData);
      setRestaurants(restaurantData);
      setIsLoading(false);
      setError(false);
    } catch (ex) {
      console.log(ex);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <div className="body">
      {isLoading ? (
        <Shimmer />
      ) : !error ? (
        <>
          <Search
            restaurantData={allRestaurants}
            setRestaurants={setRestaurants}
          />
          <div className="filter-list">
            <button
              className={`top-rated-restaurants ${isFilterApplied ? "active" : ""}`}
              value="Top Rated Restaurants"
              onClick={() => {
                if (!isFilterApplied) {
                  setRestaurants(
                    allRestaurants.filter((res) => res.avgRating >= 4.5)
                  );
                  setIsFilterApplied(true);
                } else {
                  // We need to reset using initial data because using setRestaurants(restaurants) would consider the same object to be passed
                  // hence there will be no diff br=etween the objects to be re-rendered by React using React Fiber algorithm.
                  setRestaurants(allRestaurants);
                  setIsFilterApplied(false);
                }
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {restaurants.length === 0 ? (
              <div className="no-search-results">
                <p>No search results found.</p>
              </div>
            ) : (
              restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant} />
              ))
            )}
          </div>
        </>
      ) : (
        <div className="error-message">Cannot fetch data from API.</div>
      )}
    </div>
  );
};

export default Body;
