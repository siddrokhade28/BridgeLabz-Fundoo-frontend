import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ForgotPassword = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '50px auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle = { margin: '60px 0 0 0' };
    const [loginemail, setEmail] = useState('');
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('')
    const naviagte = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(loginemail);
    }

    const forgotpassword = (e) => {
        e.preventDefault();
        const forgotpwd = {
            email: loginemail

        }
        axios.post('http://localhost:8080/user/forgot-password', null, { params: { email: loginemail } })
            .then(result => {
                console.log(result.data.data)
                localStorage.setItem('Reset-Password-Token', result.data.data);
                setSucess(result.data.message)
                console.log(sucess)
                naviagte('/reset-password')
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.message)
                setError(err.response.data.message)
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
                    <p>Enter your Email ID</p>

                    <TextField label='Email'
                        variant="standard"
                        placeholder="Enter User Email"
                        fullWidth
                        type={'email'}
                        onChange={handleEmail}
                        required />
                    <br />
                    {error ? <p style={{ color: "red", fontSize: '15px', textAlign: 'center' }}>{error}</p> : null}
                    <Button type="submit" color="primary"
                        fullWidth
                        variant="contained"
                        style={buttonStyle}
                        onClick={forgotpassword}>
                        Next
                    </Button>
                    <br />
                    <br />
                    <Typography>
                        Return to &nbsp;
                        <Link href="/login" onClick={() => { handleChange("event", 2) }}>Login</Link>
                        &nbsp; Page
                    </Typography>
                    <br />
                    <Typography>
                        Do You have an account?
                        <Link href="/registration" onClick={() => { handleChange("event") }}>Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div >

    )
}
export default ForgotPassword;