import React, { useState } from 'react'
import {useFormik} from 'formik'
import {Link} from 'react-router-dom';

function Login() {

  const [value,setValue] = useState([]);
  const formik = useFormik({
    initialValues:{
        email : "",
        password : ""
    }, 
    onSubmit : values =>{
        
        setValue(values)
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
                 <div className='form-group col-lg-12'><p>Don't have account?</p>
                  <Link to='/register'><button type='button' className='btn btn-primary rounded col-lg-12 justify-content-center align-items-center'>Sign Up</button></Link>
                 </div>      
               </form>
              </div>      
            </div>
            </div> 
        </>
        )
                        }
                        
                        export default Login
