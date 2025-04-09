import React,{useEffect,useState} from 'react'
import './techstack.css'


const Techstack = ({tech}) => {

    

    return (
        <div className='techstack'>
            <div className="tech">
               <h1>{tech}</h1> 
            </div>
        </div>
    )
}

export default Techstack
