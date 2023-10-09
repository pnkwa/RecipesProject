import { response } from "express";
import React, { useState, useEffect } from "react";

export default function Search() {
  // const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (search) {
  //     searchAnime(search);
  //   }
  // };

  // const searchAnime = async (recipes) => {
  //   await useEffect(() => {
  //     axios
  //       .get(`http://localhost:8000/recipes?name=${recipes}`)
  //       .then((response) => {});
  //   }, []);
  // };

  return (
    <form action="" class="searchbar">
      <input type="text" placeholder="Look for yummy recipes!" />
      <button type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
