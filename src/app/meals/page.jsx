"use client";
import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals || []);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div>
      <p>{JSON.stringify(meals)}</p>
    </div>
  );
};

export default Meals;
