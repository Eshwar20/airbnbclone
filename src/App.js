import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './style.css'
import data from './data'

function App() {

    const cards = data.map(item => {
        return(
            <Card
                key ={item.id}
                // img ={item.coverImg}
                // rating ={item.stats.rating}
                // reviewCount= {item.stats.reviewCount}
                // location= {item.location}
                // title= {item.title}
                // price= {item.price}
                // openspots ={item.openSpots}

                item = {item}

               // {...item}
            />
        ) 
    })
    return(

        <div>
            <Navbar/>
            <Hero/>
            <section className="cards--list">
                 {cards}
            </section>
            

        </div>

    )
}

export default App