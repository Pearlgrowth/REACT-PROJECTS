
import React from "react"; 
import Count from './components/Count'; 
import "./App.css"; 

function App() { 
	return ( 
    <>
    <div className="App"> 
			<h1 id="top"> 
			REACT WORD COUNT!
			</h1> 
			<h1> 
			Words and Letters 
			Counter 
			</h1> 
			<Count /> 
		</div> 
    </>
	); 
} 

export default App; 
