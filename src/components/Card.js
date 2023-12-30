import React from "react";

import logo from "../images/star.png"

//conditional rendering being used for soldout
function Card(props)
{
    return(
        <div className="card">
            {props.item.openSpots === 0 && <div className="card--badge">
                Sold Out
            </div>}

            {props.item.openSpots > 2 && <div className="card--badge1">
                Fast Filling
            </div>}

            <img src={`${props.item.coverImg}`} alt="img" className="card--image"/>
            <div className="card--stats">
                <img src={logo} className="card--star" alt="star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount})</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} </span> / person</p>

        </div>
    )
}

export default Card