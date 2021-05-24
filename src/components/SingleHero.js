import React from 'react';

const singleHero = (props) => {
    const{name,appearance,biography,images,powerstats} = props.hero;
    return (
        <div>
        <img src={images.lg} alt="image" style={{"height":"325px","width":"325px"}}/>
            <h3>{name}</h3>
            <h5>{appearance.gender}</h5>
            <h5>{appearance.height[0]}</h5>
            <h5>{appearance.weight[1]}</h5>
            <h5>{biography.fullName}</h5>
            <h5>{biography.publisher}</h5>
            <h5>{powerstats.combat}</h5>
            <h5>{powerstats.durability}</h5>
            <h5>{powerstats.strength}</h5>
            <h5>{powerstats.intelligence}</h5>
            <h5>{powerstats.power}</h5>
            <h5>{powerstats.speed}</h5>
        </div>
    )
}

export default singleHero;
