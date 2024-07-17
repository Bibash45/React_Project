import React, { useState } from "react";

function List({ key, text, index, deleteList, editList }) {
  const [newText, setNewText] = useState(text);
  const [isEditting, setIsEditting] = useState(false);
  function handleEdit() {
    setIsEditting(true);
  }
  function handleSave() {
    editList(index, newText);
    setIsEditting(false);

  }
  function handleChange(e) {
    e.preventDefault();
    setNewText(e.target.value);
  }

  return (
    <>
      <li>
        {isEditting ? (
          <div>
            <textarea value={newText} onChange={handleChange}></textarea>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
              {text} 
              <button onClick={handleEdit}>Edit</button>
              <button onClick={()=> deleteList(index)}>Delete</button>
          </div>
        )}
      </li>
    </>
  );
}

export default List;
