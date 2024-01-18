import React from 'react'
import './Newcollection.css'
import New_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const Newcollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collection'>
            {New_collection.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
export default Newcollection
