import './App.css';
import { IoMdAddCircle} from 'react-icons/io';
import { useState } from 'react';
import { AiFillMinusCircle } from 'react-icons/ai'

function App() {
 const data = [
  {
    Question: "Question 1",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record.",
  },
  {
    Question: "Question 2",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record.",
  },
  {
    Question: "Question 3",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record."
  },
  
  {
    Question: "Question 4",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record."
  },
  
 ]

const [clicked, setClicked] = useState(null)

const toggle = (i) => {
  if (clicked === i )
  {
   return setClicked(null)
  }
  setClicked(i)
}

  return (
    <div className="container">
      <div className="accordion">
       {data.map((item, i)=>(
        <div className="item">
         <div className="title" onClick={() => toggle(i)}>
          <h2>{item.Question}</h2>
          <span>
          { clicked === i ? <AiFillMinusCircle size={30} /> : <IoMdAddCircle size={30} /> }
          </span>
         </div>
         <div className={clicked === i ? "content.show" : "content"}>{item.Content}</div>
        </div>
       ))}
      </div>
    </div>
  );
}

export default App;

