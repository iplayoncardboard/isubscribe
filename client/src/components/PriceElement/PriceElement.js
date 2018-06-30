import React from 'react'

const PriceElement = props =>{
    <div>
        {props.planName}
        {props.price}
        {props.frequency}
        {props.default}
       
          <button onClick={props.removeItem}>Remove Item</button>
    </div>
}

export default PriceElement;