import React, { useState, useEffect } from "react";
import Opa from "../../lib/img/opa.svg"
import axios from "axios";
import "./home.scss";
function Section2() {
    const [films, setFilms] = useState([]);
 

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

        if (res?.data) {
          setFilms((res?.data.slice(0,5)));
        }
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchFilms();
  }, []);
    return(
        <div className="container">
         <div className="section2">
     
     <ul className="section__render">
        
        {films.map((item) => (
          <li key={item.id}>
            <img
              className="section__render__img"
              src={item.thumbnailUrl}
              alt={item.title + "s Poster"}
              width={220}
              height={150}
            />
            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
     </div>
        
        </div>
    )
}

export {Section2};