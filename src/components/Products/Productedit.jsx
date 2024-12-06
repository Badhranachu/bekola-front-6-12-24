import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import baseurl from '../../Api';
import { Topbar } from '../home/Topbar';
import Sidebar from '../home/Sidebar';
import { Button, TextField } from '@mui/material';

const Productedit = () => {

    var [inputs, setInputs] = useState(this.this.props.first.data)
  var [selectedimage, setSelectedimage] = useState([]);
  var [category, setCategory] = useState([]);

  const navigate = useNavigate();



  const inputhandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  useEffect(() => {

    axios.get(baseurl + "/product/pview")
      .then(response => {
        console.log(response.data)
        setCategory(response.data)
      })
      .catch(err => console.log(err))
    axios.get(baseurl + "/category/cview")
      .then(response => {
        console.log(response.data)
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleimage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.Pphoto = file;
  }



  const updatedata = () => {
    const formdata = new FormData();
    formdata.append('Pname', inputs.Pname);
    formdata.append('Pdescr', inputs.Pdescr);
    formdata.append('Price', inputs.Price);
    formdata.append('Cname', inputs.Cname);
    formdata.append('Status', inputs.Status);
    formdata.append('Pphoto', inputs.Pphoto);

    fetch('http://localhost:5005/product/pedit/' + inputs._id,
      //fetch('baseurl + "/product/pedit/" + id',
      {
        method: 'put',
        body: formdata,
      })
      .then((response) => response.json())
      .then((data) => {
        alert("record saved")
      })
      .catch((err) => {
        console.log("error")
      })
  }
  return (
    <div>
         <Topbar />
      <Sidebar />
      <h1 align="center">SELL A PRODUCT</h1>
      <form>
        <TextField id="outlined-basic" label="Product name" variant="outlined" value={inputs.Pname} name='Pname' onChange={inputhandler} /><br /><br />
        <TextField id="outlined-basic" label="Description" variant="outlined" value={inputs.Pdescr} name='Pdescr' onChange={inputhandler} /><br /><br />
        <TextField id="outlined-basic" label="Price" variant="outlined" value={inputs.Price} name='Price' onChange={inputhandler} /><br /><br />
        Category:  &nbsp;&nbsp;
        <select name="Cname" value={inputs.Cname} onChange={inputhandler}  >
          {
            category.map((value, index) => {
              return (
                <option key={index} value={value.Cname}>{value.Cname}</option>
              )


            })
          }
        </select><br /><br />

        Status: &nbsp;&nbsp;
        <select name="Status">
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select><br /><br />

        To add photo <input type='file' onChange={handleimage} />

        <Button onClick={updatedata}>UPDATE</Button>
      </form>
      
    </div>
  )
}

export default Productedit
