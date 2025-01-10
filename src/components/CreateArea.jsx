import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({title:"",content:""});

  function handleChange(event){
    const {name, value} = event.target
    setText((prevValue)=>{
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={text.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={text.content}/>
        <button onClick={(event)=>{
          props.handleClick(text)
          setText({title:"",content:""})
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
