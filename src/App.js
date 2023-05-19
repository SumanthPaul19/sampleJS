import React, { useState } from "react" 
import "./App.css"

import img from "./image.jpg"

const App = () => {
const [values, setValues] = useState({
  name:"",
  age: "",
  description: "",
});

const handleChange = (event) => {
  setValues ({
  ... values,
  [event.target.name]: event.target.value, 
});
};

return (
<div className="App">
<div>
  <form>
    <label>
      Name:
      <input type="text" name="name" value={values.name} onChange={handleChange} autoComplete="off"/>
    </label>

    <label>
      Age:
      <input type="number" name="age" value={values.age} onChange={handleChange}/>
    </label>
    <label>
      Description :
    <textarea name="description" value={values.description} onChange={handleChange} />
    </label> 
    <button type="button" className="btn">Submit
    </button>
  </form>
</div>
  <div className="values">
    <img src= {img} alt="i"/> 
    <div className="container">
      <p>Name: {values.name}</p>
      <p>Age: {values.age}</p>
      <p>Description: {values.description}</p>
    </div>
  </div>
</div>
);
};
export default App;
