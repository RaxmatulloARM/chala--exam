import React, { useState, useEffect } from "react";
// import Opa from "../../lib/img/opa.svg"
import axios from "axios";
import { Link } from "react-router-dom";
function Section3() {
    const [films, setFilms] = useState([]);
 

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

        if (res?.data) {
          setFilms((res?.data.slice(5,8)));
        }
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchFilms();
  }, []);
    return(
        <div className="container">
         <div className="section3">
     {/* <div className="mayda__div">
          <img src={Opa} alt="Opa" />
          <h3 className="accaunr__name"></h3>
        </div> */}
     <ul className="section__render22">
        
        {films.map((item) => (
          <Link key={item.id} to={"/Player/" + item.id}>
          <li key={item.id}>
            <img
              className="render2__img"
              src={item.url}
              alt={item.title + "s Poster"}
              width={340}
              height={250}
            />
            <h2>{item.title}</h2>
          </li>
          </Link>
        ))}
      </ul>
     </div>
        
        </div>
    )
}

export {Section3};