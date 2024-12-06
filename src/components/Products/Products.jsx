import React, { useEffect, useState } from 'react'
import Sidebar from '../home/Sidebar'
import { Topbar } from '../home/Topbar'
import { Button, FormControl, Input, InputLabel, NativeSelect, styled, TextField } from '@mui/material'
import axios from 'axios'
import baseurl from '../../Api'


const Products = () => {


  var [inputs,setInputs]=useState({"Pname":'',"Price":'',"Desc":'',"Cid":'',"Status":'ACTIVE'})
  var[category,setCategory] = useState([]);
  var [selectedimage,setSelectedimage] = useState(null);

 
    
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
  }
  useEffect(()=>{
        
    axios.get(baseurl + "/Category/Cview")
    .then(response =>{
        console.log(response.data)
        setCategory(response.data)
    })
    .catch(err=>console.log(err))
  },[])
  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.photo=file;
  }
  const savedata =()=> {
    const formdata = new FormData();
 
  formdata.append('Pname',inputs.Pname);
  formdata.append('Price',inputs.Price);
  formdata.append('Desc',inputs.Desc);
  formdata.append('Cid',inputs.Cid);
  formdata.append('Status',inputs.Status);
  formdata.append('photo',inputs.photo);

  // console.log(formdata.photo)


  fetch(baseurl+'/Product/Pnew',
  {method:'post',body:formdata,})
  .then((response)=>response.json())
  .then((data)=>{
      alert("record saved")
  })
  .catch((err)=>{
     console.log("error")
  })
    
}



  return ( 
    <div>
          <Topbar/>
        <Sidebar/>
        <div className='productbase'>
        <h1 align="center">TO ADD A NEW PRODUCT</h1>
      
        <h1 align="center">
        
      <TextField id="standard"   name="Pname"label="Product name" variant="standard"  value={inputs.Pname}  onChange={inputhandler}/><br></br><br></br>
      <TextField id="standard" name="Price"  label="Price" variant="standard" value={inputs.Price}  onChange={inputhandler}/><br></br><br></br>
      <TextField id="standard" name="Desc"  label="Description" variant="standard" value={inputs.Desc}  onChange={inputhandler} /><br></br><br></br>
     
      <label htmlFor="Cid">Category:</label>
          <select name="Cid" id="Cid" value={inputs.Cid}  onChange={inputhandler}>
          {
            category.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Cname}</option>
                )


            })
        }
          </select>
     
          <label htmlFor="Pphoto">Photo:</label>
          <input type="file" onChange={handleimage}/>

        
        Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>

        <Button variant="outlined" className='save-button' onClick={savedata}>Save</Button>
</h1>
        </div>
      

      
      </div>
      
  )
}

export default Products