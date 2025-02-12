import React, { useEffect, useState } from "react";
import { useMeals } from "../../store";

const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useMeals();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Seafood Recipes
      </h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800 p-4">
                {meal.strMeal}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No meals found
          </p>
        )}
      </div>
    </div>
  );
};

export default Meals;
