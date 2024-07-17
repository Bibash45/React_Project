import React, { useState } from 'react'

function Add({addList}) {

    const [text,setText] = useState('');
   function handleChange(e){
    e.stopPropagation()
    setText(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
     addList(text);
     setText("")
    }
    
  return (
    <form >
        <textarea name="txt-area" id="txt-area" onChange={handleChange}>write note here</textarea><br />
        <input type="submit" value="Add" name="submit" id="submit" onClick={handleSubmit} />
    </form>
  )
}

export default Add