import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import { ShimmerCard } from "./Shimmer";
const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredListofRestaurants, setFilteredListofRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8892684&lng=77.63991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setListofRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListofRestaurants(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("BOdy");

  const searchButtonHandler = () => {
    const searchedRestaurants = listofRestaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("searchedRestaurants", searchedRestaurants);
    setFilteredListofRestaurants(searchedRestaurants);
    // setListofRestaurants(searchedRestaurants);
  };

  return listofRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button onClick={searchButtonHandler}>Search</button>
        <button
          className="filter-btn"
          onClick={() => console.log("Button Clicked")}
        >
          Filter
        </button>
      </div>
      <div className="res-Container">
        {filteredListofRestaurants.map((restaurant) => (
          <ResCard
            key={restaurant?.info?.id}
            cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
            name={restaurant?.info?.name}
            cuisines={restaurant?.info?.cuisines}
            avg={restaurant?.info?.avg}
            costForTwo={restaurant?.info?.costForTwo}
            deliveryTime={restaurant?.info?.sla?.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
