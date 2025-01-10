import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr,setArr] = useState([]);

  function addItem(item){
    if(item.title!=="" || item.content!=="")
    setArr((prevItem)=>{
      return [...prevItem, item]
    })
  }

  function delItem(id){
    setArr((prevItems)=>{
      return prevItems.filter((value,index)=>{
        return index!==id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        handleClick={addItem}
      /> 
        {arr.map((item, index)=>{
          return <Note 
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          del={delItem}
          />
        })}
      <Footer />
    </div>
  );
}

export default App;
