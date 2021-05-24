import React,{Fragment,useState} from 'react';
import SingleHero from './SingleHero';

const Superhero = () => {

    const [heroes,setHeroes] = useState([
            
        {
          "id": "5f899de21444225f503765c6",
          
          "views": 425,
          "rating": 4.5,
          "title": "My Fifteen Blog Post",
          "slug": "my-fifteen-blog-post",
          "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
          "category": "Tech",
          "money":{
              "price":500
          }
        },
        {
          "id":"5f8d842b6b73fe95dcae057e",
          "views": 425,
          "rating": 4.0,
          "title": "My Sixteen Blog Post",
          "slug": "my-sixteen-blog-post",
          "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
          "category": "Non-Tech",
          "money":{
            "price":600
            }
        },
        {
          "id":"5f9000e12993178f98e22677",
          
          "views": 425,
          "rating": 5,
          "title": "My Seventeen Blog Post",
          "slug": "my-seventeen-blog-post",
          "body": "This is the content of my first blog that i have created through postmn by using my own api to interatct with database",
          "category": "Confess",
          "money":{
            "price":500
            }
        }
    ]);
    console.log(heroes);

    return (
        <Fragment>
            <div>
                {heroes.map((hero)=>{
                    return <SingleHero hero={hero}/>
                })}
                
            </div>
        </Fragment>
        
    )
}

export default Superhero;
