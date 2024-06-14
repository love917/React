import './App.css';
import Box from "./components/Box";

function App() {
  const handleClick = function(e){
    e.preventDefault();
    console.log("클릭")
  }

  return (
    <div className="App">
      <button onClick={handleClick}>버튼</button>
      <div className="App">
        <Box image="https://i.pinimg.com/236x/b9/22/d8/b922d8178445667d6c5494c3cee264ac.jpg" title="제목1" isNew={true}/>
        <Box image="https://i.pinimg.com/736x/c7/ba/ef/c7baefae9e60ca2fa5b8785a48962433.jpg" title="제목2"/>
      </div>
    </div>
  );
}

export default App;
