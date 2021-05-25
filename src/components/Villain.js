import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import SingleVillain from './SingleVillain';
import Search from './Search';

const Villain = () => {


    const [villains,setVillains] = useState([]);
    
    //console.log(heroes);

    useEffect(()=>{
        //console.log("use effect fired");
        async function loadFunction(){
            const res = await axios.get(`https://superhero-search.p.rapidapi.com/api/villains`,{
            headers:{
                'x-rapidapi-key':'c55a71dfdbmsh99fb2531a44af40p188352jsnf277366026c0'
            }
        });

        //console.log(res.data);
        setVillains(res.data);
        }
        loadFunction();

        

    // eslint-disable-next-line
    },[]);

    return (
        <Fragment>
        <Search/>
        {villains == null ? <h1>Loading...</h1> : <div style={villainStyle}>
                {villains.map((villain)=>{
                    return <SingleVillain villain={villain} key={villain.id}/>
                })}
                
            </div>}
            
        </Fragment>
        
    )
};

const villainStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3 ,1fr)',
    gridGap:'0.5rem'
}

export default Villain;
