import "./home.scss";
import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Context as Til } from "../../context/Localiz";
import { Language } from "../../context/Context";
import btnrasm from "../../lib/img/header_chiziq.svg";
import Home from "../../lib/img/header_uy.svg";
import Trending from "../../lib/img/header__olov.svg";
import subs from "../../lib/img/subcrise.svg";
import lib from "../../lib/img/lirary.svg";
import his from "../../lib/img/history.svg";
import time from "../../lib/img/soat.svg";
import fav from "../../lib/img/yulduz.svg";
import Like from "../../lib/img/yurak.svg";
import music from "../../lib/img/misic.svg";
import game from "../../lib/img/game.svg";
import more from "../../lib/img/more_belgisi.svg";
import Ylogo from "../../lib/img/youtube_logo.svg"
document.title = "YouTube";

function Header() {
  const { lang, setLang } = useContext(Til);
  const [data2, setData2] = useState([]);
  const Ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users?page=1");
        const data = await res.json();
        if (data.data) {
          setData2(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleMenu = () => {
    Ref.current.classList.toggle("none");
  };

  return (
    <div>
      <div className="header__divv">
        <ul className="Header__ul">
          <li className="btndiv">
            <button className="header__btn" onClick={toggleMenu}>
              <img src={btnrasm} alt="logo" width={20} height={17} />
            </button>

            <NavLink className="link" to={"/Home"}>
              <img src={Ylogo} alt="logo" width={116} height={25} />
            </NavLink>
          </li>
          <li className="Header__item">
            <select className="select" value={lang} onChange={(evt) => setLang(evt.target.value)}>
              <option value="Uz">UZ</option>
              <option value="RU">RU</option>
              <option value="Eng">EN</option>
            </select>
          </li>
          <li className="header__item">
            <Link className="Header__link" to={"/"}>
              <img src={Home} alt="logo" width={20} height={19} />
              <p className="header__text">{Language[lang].header.a1}</p>
            </Link>
          </li>
          <li className="header__item">
            <NavLink className="Header__link" to={"/Dontwork"}>
              <img src={Trending} alt="logo" width={16} height={21} />
              <p className="header__text">{Language[lang].header.a2}</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="Header__link" to={"/Dontwork"}>
              <img src={subs} alt="logo" width={18} height={18} />
              <p className="header__text">{Language[lang].header.a3}</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="Header__link" to={"/Dontwork"}>
              <img src={lib} alt="logo" width={20} height={16} />
              <p className="header__text">{Language[lang].header.a4}</p>
            </NavLink>
          </li>
          <div ref={Ref} className="Header__ul none">
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={his} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a5}</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={time} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a6}</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={fav} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a7}</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={Like} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a8}</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={music} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a9}</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={game} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a10}</p>
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink className="Header__link" to={"/Dontwork"}>
                <img src={more} alt="logo" width={20} height={16} />
                <p className="header__text">{Language[lang].header.a11}</p>
              </NavLink>
            </li>
          </div>
        </ul>
        <div className="Api">
          <ul className="item">
            <h3 className="profiliessss">{Language[lang].header.a3}</h3>
            {data2?.length > 0 &&
              data2.map((user) => (
                <Link key={user.id} to={"/Chanel/" + user.id}>
                  <li className="profilli" key={user.id}>
                    <img
                      className="pprofilrasmlar"
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name}'s avatar`}
                      width={26}
                      height={26}
                    />
                    <h2 className="profilname">{`${user.first_name} ${user.last_name}`}</h2>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Header };
