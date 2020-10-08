import React from 'react'
import Cards from './Cards'
import { ScaleLoader } from 'react-spinners'
import './CardsStructure.css'




const CardsStructure = ({ items, isLoading }) => {
  return ( 
    isLoading ? (
      <span className="spaan"><ScaleLoader size={150}
          color={"#123abc"} loading/></span>
      ) : ( <div>
        {items.map(item => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </div> )
  )
}


export default CardsStructure
