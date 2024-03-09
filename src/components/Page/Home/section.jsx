import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Logos from "../../lib/img/section__logos.svg";
import Brat from "../../lib/img/section__brat.svg";
import Lupa from "../../lib/img/Lupa.svg";

import "./home.scss";

function Section() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

        if (res?.data) {
          setFilms((res?.data.slice(0, 10)));
        }
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchFilms();
  }, []);

  // const handleSearch = async () => {
  //   try {
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
  //     if (res?.data) {
  //       setFilms(res.data.splice(1, 5));
  //     }
  //   } catch (error) {
  //     console.error("Error searching:", error);
  //   }
  // };

  return (
    <div className="container">
      <div className="Section__div">
        <input
          className="Section__input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <button className="section__btn" type="button" >
          <img src={Lupa} alt="Lupa" width={18.21} height={18.21} />
        </button>
        <ul className="section__list">
          <li className="section__item">
            <NavLink className="section__navlink" to={"/Dontwork"}>
              <img src={Logos} alt="logo" />
            </NavLink>
            <NavLink to={"/Dontwork"}>
              <img className="brat" src={Brat} alt="logo" />
            </NavLink>
          </li>
        </ul>
      </div>
     
    
    </div>
  );
}

export { Section };
