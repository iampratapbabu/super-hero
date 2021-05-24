import React from 'react'

const singleHero = (props) => {
    const{title,body,category} = props.hero;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <h5>{category}</h5>
            <h5>{props.hero.money.price}</h5>
        </div>
    )
}

export default singleHero;
