import React,{useState} from 'react'
import "./Note.css"
import Add from './Add'
import List from './List'
function Note() {
    const[txt,setTxt] = useState(["Namasfte"])
    function addList(text){
        setTxt([...txt,text])
    }
    function deleteList(index) {
        const newNotes = txt.filter((_, i) => i !== index);
        setTxt(newNotes);
      }
    
      function editList(index, newText) {
        const newNotes = txt.map((text, i) => (i === index ? newText : text));
        setTxt(newNotes);
      }

  return (
    <div className='Note List'>
        <Add addList={addList}></Add>
        <ol>
     {txt.map((item,index)=>(
        <List 
        key={index}
        text={item}
        index={index}
        deleteList={deleteList}
        editList={editList}
        ></List>
     )
     )}
        </ol>
    </div>
  )
}

export default Note