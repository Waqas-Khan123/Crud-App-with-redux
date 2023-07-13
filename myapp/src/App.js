
import ResponsiveAppBar from "./components/navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/user_Reg";
import Info from "./components/user_info";
import UpdateData from "./components/update";
import { useState } from "react";



function App() {
  let [data,setData]=useState('');

  

console.log(data);

  return (<div>
  
<ResponsiveAppBar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/information" element={<Info setData={setData}/>}/>
  <Route path="/update" element={<UpdateData data={data}/>}/>
</Routes>

  </div> );
}

export default App;