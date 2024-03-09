import React from "react";
import "./player.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Home/Header";
import { Section } from "../Home/section";
import like from "../../lib/img/Like.png";
import dislike from "../../lib/img/Dislike.png";
import share from "../../lib/img/Share.png";
import more from "../../lib/img/more.png";
import food from "../../lib/img/food.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import autoplay from "../../lib/img/Autoplay.png";
function Player() {
    const { item_id } = useParams();
    const [item, setItem] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [info, setInfo] = useState([]);


    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${item_id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [item_id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    React.useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

                if (res?.data) {
                    
                    setInfo((res?.data.slice(1, 6)));
                }
            } catch (error) {
                console.error("Error fetching data from server:", error);
            }
        };

        fetchInfo();
    }, []);

    return (
        <div className="continer">
            <Header />
            <Section />
            {item && (
                <div className="player__info">
                    <img className="player__video"
                        src={item.url}
                        alt={item.title}
                        width={1100}
                        height={650}
                    />
                    <h2 className="player__title">{item.title}</h2>
                    <div className="player__shares">
                        <h4 className="shares__title">123k views</h4>
                        <ul className="shares__list">
                            <li className="shares__item">
                                <img src={like} alt="like" width={100} height={40} />

                            </li>
                            <li className="shares__item">
                                <img src={dislike} alt="like" width={100} height={40} />

                            </li>
                            <li className="shares__item">
                                <img src={share} alt="like" width={100} height={40} />

                            </li>
                            <li className="shares__item">
                                <img src={more} alt="like" width={20} height={6} />
                            </li>
                        </ul>

                    </div>

                    <div className="player__about">
                        <div className="about__texts">
                            <img src={food} alt="food" width={80} height={80} />
                            <div className="texts__info">
                                <h3 className="about__title">Food & Drink</h3>
                                <p className="about__pub">Published on 14 Jun 2019</p>
                                <p className="about__text">
                                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad
                                    copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula
                                    to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the
                                    consumer’s mood when they see your ad.
                                </p>
                                <p className="about__show">Show more</p>
                            </div>
                            <Stack spacing={2} direction="row">
                                <Button className="about__btn" variant="contained" color="error">Subscribe</Button>
                            </Stack>
                        </div>
                    </div>
                    <div className="video__info">
                        <h3 className="info__title">Next</h3>
                        <img src={autoplay} alt="autoplay" />

                        <ul>
                            {info.map((info) => (
                                <li className="info__item" key={info.id}>
                                    <img className="info__img"
                                    src={info.thumbnailUrl}
                                    alt={info.title + "s Poster"}
                                    width={220}
                                    height={150}
                                />
                                <h3 className="info__post">{info.title}</h3>
                                </li>
                            ))}
                        </ul>                      
                    </div>
                </div>
            )}
        </div>
    );
}

export { Player };
