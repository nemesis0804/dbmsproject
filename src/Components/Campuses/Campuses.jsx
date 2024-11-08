import React from 'react'
import './Campuses.css'
import { campusList } from './CampusList'
import CampusCard from './CampusCard'


const Campuses = () => {
  return (
    <div className='campus-container'>
        <div className='banner'>
            <img src='/Images/campus.jpg'></img>
            <p>Visit us at our</p>
            <hr></hr>
            <h1>CAMPUSES</h1>
        </div>
    
        <div className='background color- darkgrey px-10 flex flex-wrap items-center justify-around gap-1'>{
           campusList.map((item) => <CampusCard title={item.title} image={item.image} add={item.add}/>) 
        }  
        </div>
    </div>
  )
}

export default Campuses