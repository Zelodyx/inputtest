import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState({
    test1:"",
    test2:"",
    password:"",
    validEmail:"",
    checkbox:"",
    color:"",
    date:"",
    datetimelocal:"",
    file:"",
    hidden:"",
    image:"",
    month:"",
    number:"",
    radio:"",
    range:"",
    reset:"",
    search:"",
    tel:"",
    time:"",
    url:"",
    week:"",
  });
  const handleChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Input Test</h1>
      <hr /> 
      <label form="test1">Test1</label>
      <input
      id="test1"
      onChange={(e)=> handleChangeInput(e)}
      type="text" 
      name="test1"
      value={inputValue.test1}
       />  
      <br />  
      <label>
        Test2
      <input
      className="mt-2"
      onChange={(e)=> handleChangeInput(e)}
      type="text" 
      name="test2"
      value={inputValue.test2}
       /> 
      </label>
      <br />   
      <label form="password">Password</label>
      <input
      className="mt-2"
      id="password"
      onChange={(e)=> handleChangeInput(e)}
      type="password" 
      name="password"
      value={inputValue.password}
       /> 
       <br /> 
       <label form="emailInput">Email</label>
      <input
      className="mt-2"
      id="emailInput"
      onChange={(e)=> handleChangeInput(e)}
      type="emailInput" 
      name="validEmail"
      value={inputValue.validEmail}
       /> 
      <br /> 
       <label form="checkbox">Checkbox</label>
      <input
      className="mt-2"
      id="checkbox"
      onChange={(e)=> handleChangeInput(e)}
      type="checkbox" 
      name="checkbox"
      value={inputValue.checkbox}
       /> 
      <br /> 
       <label form="color">color</label>
      <input
      className="mt-2"
      id="color"
      onChange={(e)=> handleChangeInput(e)}
      type="color" 
      name="color"
      value={inputValue.color}
       />
      <br /> 
       <label form="date">date</label>
      <input
      className="mt-2"
      id="date"
      onChange={(e)=> handleChangeInput(e)}
      type="date" 
      name="date"
      value={inputValue.date}
       />
      <br /> 
       <label form="datetime-local">datetime-local</label>
      <input
      className="mt-2"
      id="datetime-local"
      onChange={(e)=> handleChangeInput(e)}
      type="datetime-local" 
      name="datetimelocal"
      value={inputValue.datetimelocal}
       />
      <br /> 
       <label form="file">file</label>
      <input
      className="mt-2"
      id="file"
      onChange={(e)=> handleChangeInput(e)}
      type="file" 
      name="file"
      value={inputValue.file}
       />
      <br /> 
       <label form="hidden">hidden</label>
      <input
      className="mt-2"
      id="hidden"
      onChange={(e)=> handleChangeInput(e)}
      type="hidden" 
      name="hidden"
      value={inputValue.hidden}
       /> 
      <br /> 
       <label form="image">image</label>
      <input
      className="mt-2"
      id="image"
      onChange={(e)=> handleChangeInput(e)}
      type="image" 
      name="image"
      value={inputValue.image}
       />       
      <br /> 
       <label form="month">month</label>
      <input
      className="mt-2"
      id="month"
      onChange={(e)=> handleChangeInput(e)}
      type="month" 
      name="month"
      value={inputValue.month}
       /> 
      <br /> 
       <label form="number">number</label>
      <input
      className="mt-2"
      id="number"
      onChange={(e)=> handleChangeInput(e)}
      type="number" 
      name="number"
      value={inputValue.number}
       />          
      <br /> 
       <label form="radio">radio</label>
      <input
      className="mt-2"
      id="radio"
      onChange={(e)=> handleChangeInput(e)}
      type="radio" 
      name="radio"
      value={inputValue.radio}
       />  
      <br /> 
       <label form="range">range</label>
      <input
      className="mt-2"
      id="range"
      onChange={(e)=> handleChangeInput(e)}
      type="range" 
      name="range"
      value={inputValue.range}
       />  
      <br /> 
       <label form="reset">reset</label>
      <input
      className="mt-2"
      id="reset"
      onChange={(e)=> handleChangeInput(e)}
      type="reset" 
      name="reset"
      value={inputValue.reset}
       />  
      <br /> 
       <label form="search">search</label>
      <input
      className="mt-2"
      id="search"
      onChange={(e)=> handleChangeInput(e)}
      type="search" 
      name="search"
      value={inputValue.search}
       />  
      <br /> 
       <label form="tel">tel</label>
      <input
      className="mt-2"
      id="tel"
      onChange={(e)=> handleChangeInput(e)}
      type="tel" 
      name="tel"
      value={inputValue.tel}
       />  
      <br /> 
       <label form="time">time</label>
      <input
      className="mt-2"
      id="time"
      onChange={(e)=> handleChangeInput(e)}
      type="time" 
      name="time"
      value={inputValue.time}
       />  
      <br /> 
       <label form="url">url</label>
      <input
      className="mt-2"
      id="url"
      onChange={(e)=> handleChangeInput(e)}
      type="url" 
      name="url"
      value={inputValue.url}
       />
      <br /> 
       <label form="week">week</label>
      <input
      className="mt-2"
      id="week"
      onChange={(e)=> handleChangeInput(e)}
      type="week" 
      name="week"
      value={inputValue.week}
       />    
    </div>
  )
}

export default App
