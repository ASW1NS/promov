import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Movi = (props) => {
    var [movies,setmovies]=useState(props.data)
    console.log("add page props"+props.data)
   
    const handleChange = (e)=>{
        const {name,value}=e.target
        setmovies({...movies,[name]:value})
        console.log(movies)
    }
    const savedata=()=>{
        console.log("Button clicked")
        if(props.method==="post"){
        axios.post("http://localhost:3005/movies",movies)
        .then(response=>{
            alert("Successfully added")
        })
        .catch(error=>{
            alert("Failed")
        })
    }
    else if(props.method==="put"){
        axios.put("http://localhost:3005/movies/"+movies.id,movies)
        .then(response=>{
            console.log("put data"+response.data)
            alert("Successfully updated")
        })
        .catch(error=>{
            alert("Failed")
    })}

}   
  return (
    <div>
         <Typography variant='h4'>Movie</Typography><br></br>
        <TextField label='Movie'variant='standard'name='movie'value={movies.movie}onChange={handleChange}></TextField><br></br>
        <TextField label='director' variant='standard' name='director'value={movies.director}onChange={handleChange}></TextField><br></br>
        <TextField label='language' variant='standard'name='language' value={movies.language}onChange={handleChange}></TextField><br></br><br></br>
        <TextField label='genre'variant='standard'name='genre'value={movies.genre}onChange={handleChange}></TextField><br></br>
        <TextField label='releaseyear'variant='standard'name='releaseyear'value={movies.releaseyear}onChange={handleChange}></TextField><br></br>
       
        <Button variant='contained' color='success' onClick={savedata} type='submit'>Submit</Button>
    </div>
  )
}

export default Movi