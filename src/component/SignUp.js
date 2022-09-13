import { Grid, Paper, Avatar, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from "axios";



const Signup = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle = { margin: '60px 0 0 0' };

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFname=(event)=>{
        setFirstname(event.target.value)
        console.log(firstname)
    }
    const handleLname=(event)=>{
        setLastname(event.target.value)
        console.log(lastname)
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)
        console.log(email)
    }
    const handlePwd=(event)=>{
        setPassword(event.target.value)
        console.log(password)
    }
    
    const submitUser= async(e)=>{
        e.preventDefault();
        const userData ={firstName:firstname,
            lastName:lastname,
            email:email,
            password:password};
        await axios.post('http://localhost:8080/user/register',userData)
        .then(result=>{console.log(result.data);});
        

    }


    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatharStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                    <Typography variant="caption" gutterBottom>please fill the form to register</Typography>
                </Grid>
                <form onSubmit={submitUser} autoComplete="off">
                    <TextField label='First Name' variant="standard" placeholder="Enter User First Name" fullWidth required  onChange={(e)=>{handleFname(e)}} />
                    <TextField label='Last Name' variant="standard" placeholder="Enter User Last Name" fullWidth required onChange={(e)=>{handleLname(e)}} />
                    <TextField label='Email' variant="standard" placeholder="Enter User Email" fullWidth required onChange={(e)=>{handleEmail(e)}}/>
                    <TextField label='Password' variant="standard" placeholder="Enter User Password" type={'password'} fullWidth required onChange={(e)=>{handlePwd(e)}}/>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={buttonStyle}>
                        SIGN UP
                    </Button>
                </form>

            </Paper>
        </Grid>
    )
}
export default Signup;