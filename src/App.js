import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


export const App =(props)=> {
   const  pageSize=9;
  //  const country='us'
   const apiKey=process.env.REACT_APP_NEWS_API;
   const [progress,  setProgress] = useState(0);
   const [data,setData]=useState(null);
   const recieveData=(data)=>{
    setData(data);
   }
   const country='in';
   console.log(data)
   


  // state={
  //   progress:0
  // }

   const setUpProgress=(progress)=>{
     setProgress(progress)
  }
  
    return (
      <>
       <Router>
          <Navbar recieveData={recieveData} />
          <LoadingBar
          color='#f11946'
          progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News  setUpProgress={setUpProgress} key='general' apiKey={ apiKey} pageSize={ pageSize} country={country} category='general' />}></Route>
            <Route exact path='/business' element={<News  setUpProgress={setUpProgress} key='business' apiKey={ apiKey} pageSize={ pageSize} country={country} category='business' />}></Route>
            <Route exact path='/entertainment' element={<News  setUpProgress={  setUpProgress} key='entertainment' apiKey={ apiKey} pageSize={ pageSize} country={country} category='entertainment' />}></Route>
            <Route exact path='/health' element={<News  setUpProgress={  setUpProgress} key='health' apiKey={ apiKey} pageSize={ pageSize} country={country} category='health' />}></Route>
            <Route exact path='/science' element={<News  setUpProgress={  setUpProgress} key='science' apiKey={ apiKey} pageSize={ pageSize} country={country} category='science' />}></Route>
            <Route exact path='/sport' element={<News  setUpProgress={  setUpProgress} key='sports' apiKey={ apiKey} pageSize={ pageSize} country={country} category='sports' />}></Route>
            <Route exact path='/technology' element={<News  setUpProgress={  setUpProgress} key='technology' apiKey={ apiKey} pageSize={ pageSize} country={country} category='technology' />}></Route>
            {/* <Route exact path='/search' element={<News  setUpProgress={  setUpProgress} key={props.va} apiKey={ apiKey} pageSize={ pageSize} country={country} category={props.va}/>}></Route> */}
          </Routes>
        </Router>
      </>
    )
  
}
export default App;

