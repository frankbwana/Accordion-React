import './App.css';

function App() {
 const data = [
  {
    Question: "Question1",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record.",
  },
  {
    Question: "Question1",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record.",
  },
  {
    Question: "Question1",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record."
  },
  
  {
    Question: "Question1",
    Content: "Good morning. This is District Court 32-2-37 in the case of the Commonwealth v. Kevin Watson. This is CR 95 of 2023. The defendant is present but represented by counsel. Will counsel for the defense, please identify yourself for the record."
  },
  
 ]

  return (
    <div className="container">
      <div className="accordion">
       {data.map((item, i)=>(
        <div className="item">
         <div className="title">
          <h2>{item.Question}</h2>
          <span>+</span>
         </div>
         <div className="content">{item.Content}</div>
        </div>
       ))}
      </div>
    </div>
  );
}

export default App;

