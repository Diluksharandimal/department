import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const LogingForm=()=>{
    return(
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className='40-w p-5 rounded bg-white'>
            <form>
            <h1>Sign In</h1>
           <div className="mb-2">
            <label htmlFor="email">UserName</label>
            <input type="email" placeholder="Enter Email" className="form-control" required></input>
           </div>
           <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" required></input>
           </div>
           <br></br>
           <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check"></input>
            <label htmlFor="check" className="custom-input-lable">
                Remember Me
            </label>
           </div>
           <br></br>
           <div className="d-grid">
            <button className="btn btn-primary">Sign In</button>
           </div>
           <br></br>
           <br></br>
           <p className="text-right">
           <center>Forgot<a href="">Password?</a></center> 
           </p>
            </form>
            </div>
        </div>
    )
}

export default LogingForm;