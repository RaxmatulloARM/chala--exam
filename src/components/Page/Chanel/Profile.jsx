import React from "react";
import { useParams } from "react-router-dom";
import "./profile.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "../Home/section";
import { Header } from "../Home/Header";
import bn from "../../lib/img/Cover.png";
import nn from "../../lib/img/notification.svg";
import Search from "../../lib/img/Lupa.svg";
import Video from "../../lib/img/Video.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import flora from "../../lib/img/flora.png";
import violet from "../../lib/img/violet.png";
import philip from "../../lib/img/philip.png"; 
import arrow from "../../lib/img/Arrows.png";
document.title = "Profile"

function Chanel() {
  const { user_id } = useParams();
  const [user, setUser] = React.useState(false);
  const [video, setVideos] = useState([]);
 
  // const [setIsLoggedIn] = useToken(true);
  // const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://reqres.in/api/users/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setUser(data?.data);
         
        }
      });
  }, [user_id]);

 

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

        if (res?.data) {
          setVideos((res?.data.slice(1,6)));
        }
      } catch (error) {
        console.error("Error fetching data from server:", error);
      }
    };

    fetchVideos();
  }, []);

  


  return (
    <>
      <Header />
      <Section />
      <div className="channel__info">
        <img className="channel__img" src={bn} alt="banner" />
      {user && (
        <div className="text">
          <img className="channel__profile"
            src={user.avatar}
            alt={user.first_name + " " + user.last_name + "s avatar"}
            width={80}
            height={80}
          />
          
          <div className="title__info">
          <h2 className="channel__title">{user.first_name + " " + user.last_name}</h2>
          <p className="title__sub">1m subscribed</p>
          </div>
          <div className="notification__bn">
          <img src={nn} alt="notification" />
          <Stack className="sp__button" spacing={2} direction="row">
            <Button className="channel__sub" variant="contained" color="error">Subscribe</Button>
          </Stack>
          </div>
        </div>
      )}
      <div className="channel__heading">
        <ul className="heading__list">
          <li className="heading__item">
            <a className="heading__link" href="#link">Home</a>
          </li>
          <li className="heading__item">
            <a className="heading__link" href="#link">Videos</a>
          </li>
          <li className="heading__item">
            <a className="heading__link" href="#link">playlists</a>
          </li>
          <li className="heading__item">
            <a className="heading__link" href="#link">Channels</a>
          </li>
          <li className="heading__item">
            <a className="heading__link" href="#link">Discussion</a>
          </li>
          <li className="heading__item">
            <a className="heading__link" href="#link">About</a>
          </li>
          <li className="heading__item">
              <img src={Search} alt="search" />
          </li>
        </ul>
      </div>
      <div className="channel__hero">
        <div className="channel__video">
          <img className="video__img" src={Video} alt="video" />
          <div className="video__texts">
          <h3 className="video__title">
            Choosing The Best Audio Player 
            Software For Your Computer
          </h3>
          <p className="video__text">
          Your cheap internet-based banner advertising will become one of the 
          sought for ads there are. Today, the world of Internet advertising is rapidly 
          evolving beyond banner ads and intrusive pop-ups. Bayles A common 
          medium for advertising on the Internet is the use of banner ads. 
          </p>
          <p className="video__views">11k views  ·  6 months ago</p>
          </div>
          <div className="channel__recomended">
            <h5 className="rd__title">Recomended channel</h5>
            <ul className="rd__list">
              <li className="rd__item">
                <img src={flora} alt="flora" width={50} height={50} />
                <p className="rd_profile">Flora Benson</p>
              </li>
              <li className="rd__item">
                <img src={violet} alt="violet" width={50} height={50} />
                <p className="rd_profile">Violet Cobb</p>
              </li>
              <li className="rd__item">
                <img src={philip} alt="philip" width={50} height={50} />
                <p className="rd_profile">Phillip Mullins</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="channel__videos">
        <div className="videos__titles">
          <h3 className="videos__title">Margaret Phelps videos</h3>
          <img src={arrow} alt="arrow" />
        </div>
        <ul className="videos__list">
          {video.map((video) => (
            <li className="videos__item" key={video.id}>
              <img className="videos__img" 
              src={video.thumbnailUrl} 
              alt={video.title + "s Poster"} 
              width={220}
              height={150}
              />
              <h3 className="videos__post">{video.title}</h3>
              <p className="videos__text">240k views  ·  4 months ago Food & Drink</p>
            </li>
          ))}
        </ul>
      </div>
      </div>

    </>

  );
}

export { Chanel };