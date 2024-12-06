import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseurl from '../../Api';
import { Topbar } from '../home/Topbar';
import Sidebar from '../home/Sidebar';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import "../Category/Categoryview.css";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Productedit from './Productedit';
import { Buffer } from 'buffer';


const Productview = () => {
    var[category,setCategory] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        
        axios.get(baseurl+'/Product/Pview')
        .then(response =>{
            console.log(response.data)
            setCategory(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    const deletevalues =(id)=>{
        console.log("deleted",id)
        axios.put(baseurl+"/Category/updatestatus/"+id)
        .then((response)=>{
            alert("DELETED")
        window.location.reload(false);
        })
    }

    const updatevalues =(value)=>{
        console.log("updated",value);
        setSelected(value);
        setUpdate(true);
        }
        let result = (
        <div>
        <Topbar />
        <Sidebar />
  
      <div className="bb"> 
      <Typography>PRODUCT VIEW</Typography><br/><br/>
  <TableContainer>
  <Table >
    <TableHead>
      <TableRow>
        <TableCell >Pname</TableCell>
        <TableCell >Price</TableCell>
        <TableCell >Description</TableCell>
        <TableCell >Category</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Product image</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {category.map((value,index)=>{
            return(
                <TableRow key={index}>
                    <TableCell>{value.Pname}</TableCell>
                    <TableCell>{value.Price}</TableCell>
                    <TableCell>{value.Desc}</TableCell>
                    <TableCell>{value.Cid}</TableCell>
                    <TableCell>{value.Status}</TableCell>
                    
                    <TableCell> <img
                  src={`data:image/jpeg;base64,${Buffer.from(value.photo.data).toString('base64')}`}
                  alt="Product"
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
                /></TableCell>
                    <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                    <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
                </TableRow>
            )
        })} 
    </TableBody>
  </Table>
  </TableContainer>
      </div>
    </div>
      

    );
    if (update) {
        result = <Productedit data={selected} method="put" />;
      }
    
      return result; 
};


export default Productview

