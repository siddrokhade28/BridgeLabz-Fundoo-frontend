import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from "axios";




// const nameRegex = "^[A-Z][a-z]{2,}$";
// const emailregex = "^[A-za-z0-9]+([.+-][A-za-z0-9]+)?[@][a-z0-9]+[.][a-z]{2,3}([.][a-z]{2})?$";
// const passwordRegex = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-])[A-Za-z0-9@$!%*?&]{8,}$";



const Signup = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '80vh', width: 300, margin: '50px auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle = { margin: '60px 0 0 0' };
    const linkStylye = { padding: '30px 0 0 50px' }


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('')
        ;
    const handleFname = (event) => {
        setFirstname(event.target.value)
        console.log(firstname)

    }
    const handleLname = (event) => {
        setLastname(event.target.value)
        console.log(lastname)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)
    }
    const handlePwd = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }

    const submitUser = (e) => {
        e.preventDefault();
        const userData = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };


        axios.post('http://localhost:8080/user/register', userData)
            .then(result => {
                console.log(result.data.message)
                setSucess(result.data.message);
                <Link to="/login" />
            })

            .catch(err => {
                console.log("error 1:", err)
                setError(err.response.data.message);
                console.log("stored message:", error);

            })

    }

    return (
        <Grid>
            <Paper style={paperStyle} elevation={10}>
                <Grid align="center">
                    <Avatar style={avatharStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                    <Typography variant="caption" gutterBottom>please fill the form to register</Typography>
                    <br></br>
                    {sucess ? <p style={{ color: "red", fontFamily: "sans-serif" }}>*{sucess}*</p> : null}
                    {error ? <p style={{ color: "red", fontSize: '15px' }}>*{error}*</p> : null}
                </Grid>
                <form onSubmit={submitUser} autoComplete="off">
                    <TextField label='First Name'
                        variant="standard"
                        placeholder="Enter User First Name"
                        fullWidth
                        required
                        onChange={(e) => { handleFname(e) }} />
                    <TextField label='Last Name'
                        variant="standard"
                        placeholder="Enter User Last Name"
                        fullWidth
                        required
                        onChange={(e) => { handleLname(e) }} />
                    <TextField label='Email'
                        variant="standard"
                        placeholder="Enter User Email"
                        type={'email'}
                        fullWidth
                        required
                        onChange={(e) => { handleEmail(e) }} />
                    <TextField label='Password'
                        variant="standard"
                        placeholder="Enter User Password"
                        type={'password'}
                        fullWidth
                        required
                        onChange={(e) => { handlePwd(e) }} />
                    <Button type="submit" color="primary" fullWidth variant="contained" style={buttonStyle}>
                        SIGN UP
                    </Button>
                    <br />
                    <Typography style={linkStylye}>
                        All ready registered?
                        <Link href="/login" onClick={() => { handleChange("event", 2) }}>Login</Link>

                    </Typography>
                </form>

            </Paper>
        </Grid>
    )
}
export default Signup;