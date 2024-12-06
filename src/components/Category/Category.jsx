import React, { useState } from 'react'
import Sidebar from '../home/Sidebar'
import { Topbar } from '../home/Topbar'
import { Button, TextField } from '@mui/material'
import './category.css'
import axios from 'axios'
import baseurl from '../../Api';


const Category= () => {
    var [inputs,setInputs]=useState({"Cname":'',"Status":'ACTIVE'})

 
    
    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }

    const savedata =()=> {
      console.log(inputs)
      axios.post(baseurl+"/Category/Cnew",inputs)
      .then((response)=>{alert("Record Saved")})
      .catch(err=>console.log(err))
      
  }


    
  return (
    <div className='aa'>
      <Topbar/>
      <Sidebar/>
      <div className='categoryback' >
      
      <h1 align="center">Category</h1>

       Product name: &nbsp;&nbsp;
      <select name="Cname" value={inputs.Cname}  onChange={inputhandler}>
       <option value="Sneakers">Sneakers</option>
       <option value="Boots">Boots</option>
      </select>
<br /><br />
      
     
      Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button className='catbutton' variant="contained" color="success" onClick={savedata}>
        Submit
      </Button>

      </div>
    </div>
  )
}

export default Category
