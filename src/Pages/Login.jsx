import { useState } from "react";
import Navbar from "../Components/Navbar";
import './login.css'
import { useLoginData } from "../Store/useLoginData";
function Login(){

let {Email,Password,SetEmail,SetPassword} = useLoginData();
const [ReEnteredPasssword,SetReEnteredPassword] = useState("");
const [LocalEmail,SetLocalEmail] = useState("");
const [LocalPassword,SetLocalPassword] = useState("");
function Submit(e){
  e.preventDefault();
  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(LocalEmail) && LocalPassword === ReEnteredPasssword && LocalEmail.length>0){
  SetReEnteredPassword("");
  SetLocalPassword("");
  SetLocalEmail("");
  console.log("Email:",Email,"\nPassword:",Password);
}}
    return(<>
    <Navbar />


<div className="Loginbody">
    
    <fieldset className="border p-3 rounded" style={{marginTop:"10vh"}}>
    <legend className="w-auto px-2 fw-bold">Login</legend>
    <form action="">
  <div className="row mb-3">
    <label  className="col-sm-2 col-form-label"  >Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" placeholder="Enter Email Address" value={LocalEmail} onChange={(e)=>{SetEmail(e.target.value);SetLocalEmail(e.target.value)}} autoComplete="email" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label  className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" placeholder="Enter Password" value={LocalPassword} onChange={(e)=>{SetPassword(e.target.value);SetLocalPassword(e.target.value)}} autoComplete="password" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label  className="col-sm-2 col-form-label" ></label>
    <div className="col-sm-10">
      <input type="password" className="form-control" placeholder="Re-Enter Password"  value={ReEnteredPasssword} onChange={(e)=>{SetReEnteredPassword(e.target.value)}} autoComplete="password" required/>
    </div>
  </div>
  {(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(LocalEmail)) && LocalEmail.length>0)?<p>Invalid EMail</p>:(LocalPassword !== ReEnteredPasssword)?<p>Password Mismatch</p>:""}
  <div>
  <button type="submit" className="btn btn-outline-light" onClick={Submit}>Login</button>
  </div>
  </form>
  </fieldset>


</div>

</>)}
export default Login; 