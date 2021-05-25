import React,{Fragment} from 'react';

const singleHero = (props) => {
    const{name,appearance,biography,images,powerstats} = props.hero;
    return (
        <Fragment>
            <div class="row">
                <div class="col s12 m7">
                <div class="card pd-1">
                <div class="card-image">
                <img src={images.lg} style={{"height":"225px","width":"325px"}}/>
                
                
                <h3>{name}</h3>
                <h5> Full Name : {biography.fullName}</h5>
                <hr/>

                <div className="content-div">
                <h5>Gender : {appearance.gender}</h5>
                <h5>Height : {appearance.height[0]}</h5>
                <h5>Weight : {appearance.weight[1]}</h5>         
                <h5> Combat : {powerstats.combat}</h5>
                <h5>Durability : {powerstats.durability}</h5>
                <h5>Strength : {powerstats.strength}</h5>
                <h5>Intelligence : {powerstats.intelligence}</h5>
                <h5>Power : {powerstats.power}</h5>
                <h5>Speed : {powerstats.speed}</h5>
                </div>
                </div>

                <div class="card-action">
                <h5>Publisher : {biography.publisher}</h5>
                </div>

                </div>
                </div>
            </div>
        </Fragment>
       
    )
}

export default singleHero;
