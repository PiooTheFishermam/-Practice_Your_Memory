import React, {Component,useState,useEffect} from "react";


const AllCards = ({currentCards,cards})=>{

    const cardStyle = {
        maxHeight:"8vh"
    }
    
    if(currentCards.length === 6){
        return (
            <>
            <div>
                {cards.map((card,i)=><img key={i} src={card.url} style={cardStyle}/>)}
            </div>
            </>
        )
    }
    return null
    
}
export default AllCards