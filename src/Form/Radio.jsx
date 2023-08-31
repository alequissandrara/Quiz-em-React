import React from 'react'
import '../Style/Style.css';

const Radio = ({pergunta, options, id, value, onChange, active}) => {

  if (active === false) return null;  
  return (
    <fieldset className='container' >

        <legend style={{fontWeight:'bold'}}>{pergunta}</legend>
       
        {options.map((option) => (

        <label key={option} style={{marginBottom: '1rem', fontFamily: 'monospace'}}>

          <input 
            type="radio"
            id={id}
            checked={value === option } 
            value={option} 
            onChange={onChange}
            />
          {option}
        </label>
        ))}
    </fieldset>
  )
}

export default Radio;