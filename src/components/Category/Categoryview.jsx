import {
  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Typography,} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Topbar } from "../home/Topbar";
import Sidebar from "../home/Sidebar";
import "./Categoryview.css";
import axios from "axios";
import baseurl from '../../Api';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Categoryedit from "./Categoryedit";

const Categoryview = () => {
    var[category,setCategory] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        
        axios.get(baseurl + "/Category/Cview")
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
       
        var result=
        <div>
        <Topbar />
        <Sidebar />
  
      <div className="bb"> 
      <Typography>CATEGORY VIEW</Typography><br/><br/>
  <TableContainer>
  <Table >
    <TableHead>
      <TableRow>
        
        <TableCell >Cname</TableCell>
        <TableCell >Status</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {category.map((value,index)=>{
            return(
                <TableRow key={index}>
                    <TableCell>{value.Cname}</TableCell>
                    <TableCell>{value.Status}</TableCell>
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

if(update)
    {
      result=<Categoryedit data={selected} method='put'/>
    }
return (result)
};

export default Categoryview;
