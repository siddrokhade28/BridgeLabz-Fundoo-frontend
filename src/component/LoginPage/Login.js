import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '80vh', width: 300, margin: '50px auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle = { margin: '60px 0 0 0' };
    const space = { margin: '10px 0' }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }
    const submitLogin = (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            password: password
        };
        axios.post('http://localhost:8080/user/login', loginData)
            .then(result => {
                localStorage.clear();
                console.log(result);
                navigate('/notes-home')
                console.log("token", result.data.data);
                localStorage.setItem('token', result.data.data)

            })
            .catch(err => {
                console.log("error 1:", err)
                setError(err.response.data.message);
            })

    }

    return (
        <div>
            <Grid>
                <Paper style={paperStyle} elevation={10}>
                    <Grid align='center'>
                        <Avatar style={avatharStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <br />
                    {error ? <p style={{ color: "red", fontSize: '15px', textAlign: 'center' }}>*{error}*</p> : null}
                    <TextField label='Email'
                        variant="standard"
                        placeholder="Enter User Email"
                        type={'email'}
                        fullWidth
                        onChange={(e) => { handleEmail(e) }}
                        autoComplete="off"
                        required />
                    <TextField label='Password'
                        variant="standard"
                        placeholder="Enter User Password"
                        type={'password'}
                        fullWidth
                        autoComplete="off"
                        onChange={(e) => { handlePassword(e) }}
                        required />
                    {/* 
                    for Check box
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup> */}
                    <br />
                    <Button type="submit" color="primary" fullWidth variant="contained" style={buttonStyle} onClick={submitLogin}>
                        LOGIN
                    </Button>
                    <Typography style={space}>
                        <Link href="/forgot-password">Forgot Password</Link>
                    </Typography>
                    <Typography>
                        Do You have an account?
                        <Link href="/registration" onClick={() => { handleChange("event", 1) }}>Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>

    )
}
export default Login;