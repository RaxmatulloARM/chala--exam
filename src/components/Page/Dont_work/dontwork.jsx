import React from "react";
import { Header } from "../Home/Header";
import Work from "../../lib/img/Tuzatishishlari.jpg"
import { Section } from "../Home/section";
function Dontwork(){ 
    return(
        <div className="container" >
        <Header />
        <Section />
        <img className="dontwork" src={Work} alt="Tuzatish ishlari ketmoqda!" width={1000} height={600} />
        </div>
    )
}
export {Dontwork};