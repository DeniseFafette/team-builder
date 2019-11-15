import React, { useState } from 'react'
import data from "./TeamList"

function Card(){
    const [team, setTeam]= useState(data)
    console.log(team);
    return(
        <div></div>
    )
}

export default Card;