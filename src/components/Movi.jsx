import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Movi = () => {
     var [movie,setmovies]=useState({
        movie:"",
        year:"",
        genre:"",
        rating:"",
        director:"",
        producer:"",
        cast:""
    })
   
    const handleChange = (e)=>{
        const {name,value}=e.target
        setmovies({...movie,[name]:value})
        console.log(movie)
    }
    const savedata=()=>{
        console.log("Button clicked")
        axios.post("http://localhost:3005/movie",movie)
        .then(response=>{
            alert("Successfully added")
        })
        .catch(error=>{
            alert("Failed")
        })
    }
  return (
    <div>
         <Typography variant='h4'>Movie</Typography><br></br>
        <TextField label='Movie'variant='standard'name='movie'value={movie.movie}onChange={handleChange}></TextField><br></br>
        <TextField label='year' variant='standard' name='year'value={movie.year}onChange={handleChange}></TextField><br></br>
        <TextField label='genre' variant='standard'name='genre' value={movie.genre}onChange={handleChange}></TextField><br></br><br></br>
        <TextField label='rating'variant='standard'name='rating'value={movie.rating}onChange={handleChange}></TextField><br></br>
        <TextField label='director'variant='standard'name='director'value={movie.director}onChange={handleChange}></TextField><br></br>
        <TextField label='producer'variant='standard'name='producer'value={movie.producer}onChange={handleChange}></TextField><br></br>
        <TextField label='cast'variant='standard'name='cast'value={movie.cast}onChange={handleChange}></TextField><br></br>
        <Button variant='contained' color='success' onClick={savedata} type='submit'>Submit</Button>
    </div>
  )
}

export default Movi