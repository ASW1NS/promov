import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movi from './Movi'

const Mread = () => {
    var [movies,setmovies]=useState([])
    var [update,setupdate]=useState(false)
    var [singlevalue,setsinglevalue]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/movies")
        .then(response=>{
            console.log(response.data)
            setmovies(movies=response.data)
        })
        .catch(err=>console.log(err))
    }, [])
    const updatevalue =(value)=>{
        setsinglevalue(value);
        setupdate(true);
    }
    const deletemovie=(id)=>{
        console.log("delete clicked" +id);
        axios.delete("http://localhost:3005/movies/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })
    }
    var finalJSX=  <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>movie</TableCell>
                <TableCell>director</TableCell>
                <TableCell>language</TableCell>
                <TableCell>genre</TableCell>
                <TableCell>releaseyear</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {movies.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.movie}</TableCell>
                    <TableCell>{value.director}</TableCell>
                    <TableCell>{value.language}</TableCell>
                    <TableCell>{value.genre}</TableCell>
                    <TableCell>{value.releaseyear}</TableCell>
                    <TableCell>
                        <Button variant='contained' onClick={()=>deletemovie(value.id)}>Delete</Button>
                    </TableCell>
                   <TableCell>
                    <Button variant='contained' onClick={()=>updatevalue(value)}>Update</Button>
                   </TableCell>
                </TableRow>
            })}
       
    
        </TableBody>
    </Table>
   </TableContainer>
   if(update)
   finalJSX=<Movi data={singlevalue} method="put"/>
  return (
    <div>
       <Typography variant='h5'>Welcome to my App</Typography>
       {finalJSX}
      
    </div>
  )
}


export default Mread