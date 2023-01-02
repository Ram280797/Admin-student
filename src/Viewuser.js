import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Edituser from './Edituser';

function Viewuser() {
  const params = useParams();
  const searchParams =useSearchParams()
  useEffect(()=> {
console.log(searchParams)
  },[])
  return (
    <div className='container'>
        <div className='row'>

          <h1><b>Profile</b></h1>
          <div className='col-lg-12'>
         
          <h4><b>ID : {params.id}</b></h4>
          </div>
            <div className='col-lg-6'>
                Username :person1
            </div>
            <div className='col-lg-6'>
              Email: person 1
            </div>
            <div className='col-lg-6'>
              Country : person 1
            </div>
            <div className='col-lg-6'>
              State: person 1
            </div>
            <div className='col-lg-6'>
              City : person 1
            </div>
            <div className='col-lg-6'>
              Phone : person 1
            </div>
            <div className='col-lg-6'>
              dob : person 1
            </div>
            <div className='col-lg-6'>
              Gender : person 1
            </div>
            <button onClick={<Edituser/>} className="btn btn-primary sm-2">Edit</button>
            </div>
        </div>

   
  )
}

export default Viewuser