import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const formik = useFormik({
    initialValues:{
        email : "",
        password : ""
    }, 
    onSubmit : async (values) =>{
        try {
            await axios.post("http://localhost:3000/login",values);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
        console.log(values);
    }
  })
    return (
        <>
         <div className='container-fluid'>
            <div className='row justify-content-center align-items-center bg-dark h-100'>
              
              <div className="col-md-9 col-lg-6 col-xl-4 h-70 shadow p-3 mb-5 rounded" style={{backgroundColor : "#eee"}}>
                <h3 className='text-center'>Short URL</h3><hr/>
               <form onSubmit={formik.handleSubmit}>
                 <div className='form-group col-lg-12'>
                   <label>Email</label>
                   <input className='form-control'
                   name='email'
                   type="email"
                   onChange={formik.handleChange}
                   value={formik.values.email}
                   placeholder='Enter your Email'></input>
                 </div>
                 <div className='form-group col-lg-12'>
                   <label>Password</label>
                   <input className='form-control'
                   name='password'
                   onChange={formik.handleChange}
                   type="password"
                   value={formik.values.password}
                   placeholder='password please....'></input>
                 </div>
                 <div className='form-group col-lg-12'>
                   <button type='submit' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center'>Log in</button>
                 </div><hr/>      
               </form>
              </div>      
            </div>
            </div> 
        </>
    )
}

export default Register
