import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import SingleHero from './SingleHero';
import Search from './Search';

const Superhero = () => {


    const [heroes,setHeroes] = useState([
            
        // {
        //   "id": "420",
        //   "name":"Man-Wolf",
        //   "appearance":{
        //         "gender":"male",
        //         "height":{
        //             "0":"6'2",
        //             "1":"188cm"
        //         },
        //         "weight":"90kg"
        //   },
        //   "biography":{
        //         "fullName":"john Jameson",
        //         "placeOfBirth":"New York, New York",
        //         "publisher":"Marvel comics"
        //   },
        //   "images":{
        //         "lg":"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/429-man-wolf.jpg"
        //   },
        //   "powerstats":{
        //         "combat":70,
        //         "durability":42,
        //         "intelligence":63,
        //         "power":45,
        //         "speed":35,
        //         "strength":44
        //   }
         
        // },
        // {
        //     "id": "421",
        //     "name":"Man-Wolf",
        //     "appearance":{
        //           "gender":"male",
        //           "height":{
        //               "0":"6'2",
        //               "1":"188cm"
        //           },
        //           "weight":"90kg"
        //     },
        //     "biography":{
        //           "fullName":"john Jameson",
        //           "placeOfBirth":"New York, New York",
        //           "publisher":"Marvel comics"
        //     },
        //     "images":{
        //           "lg":"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/429-man-wolf.jpg"
        //     },
        //     "powerstats":{
        //           "combat":70,
        //           "durability":42,
        //           "intelligence":63,
        //           "power":45,
        //           "speed":35,
        //           "strength":44
        //     }
           
        // },
        // {
        //     "id": "422",
        //     "name":"Man-Wolf",
        //     "appearance":{
        //           "gender":"male",
        //           "height":{
        //               "0":"6'2",
        //               "1":"188cm"
        //           },
        //           "weight":"90kg"
        //     },
        //     "biography":{
        //           "fullName":"john Jameson",
        //           "placeOfBirth":"New York, New York",
        //           "publisher":"Marvel comics"
        //     },
        //     "images":{
        //           "lg":"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/429-man-wolf.jpg"
        //     },
        //     "powerstats":{
        //           "combat":70,
        //           "durability":42,
        //           "intelligence":63,
        //           "power":45,
        //           "speed":35,
        //           "strength":44
        //     }
           
        // } 
    ]);
    //console.log(heroes);

    useEffect(()=>{
        //console.log("use effect fired");
        async function loadFunction(){
            const res = await axios.get(`https://superhero-search.p.rapidapi.com/api/heroes`,{
            headers:{
                'x-rapidapi-key':'c55a71dfdbmsh99fb2531a44af40p188352jsnf277366026c0'
            }
        });

        //console.log(res.data);
        setHeroes(res.data);
        }
        loadFunction();

        

    // eslint-disable-next-line
    },[]);

    return (
        <Fragment>
        <Search/>
        {heroes == null ? <h1>Loading...</h1> : <div style={heroStyle}>
                {heroes.map((hero)=>{
                    return <SingleHero hero={hero} key={hero.id}/>
                })}
                
            </div>}
            
        </Fragment>
        
    )
};

const heroStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3 ,1fr)',
    gridGap:'0.5rem'
}

export default Superhero;
