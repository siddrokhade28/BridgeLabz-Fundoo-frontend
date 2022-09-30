import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";


const ResetPassword = ({ handleChange }) => {
    // const naviagte = useNavigate;

    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '50px auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle = { margin: '60px 0 0 0' };

    const [password, setPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('')

    const handlePassword = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }

    const handleConfirmPassword = (event) => {
        SetConfirmPassword(event.target.value);
        console.log(confirmPassword);
        console.log(localStorage.getItem('Reset-Password-Token'))
    }


    const resetpassword = (e) => {
        e.preventDefault();
        const resetpwd = {
            newPasswrod: password,
            confirmPassword: confirmPassword
        }
        const token = localStorage.getItem('Reset-Password-Token')

        axios.post('http://localhost:8080/user/resetPassword', resetpwd, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(result => {
                console.log(result.data)
                setSucess(result.data.message);
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data.message)
                setError(err.response.data.message)
                // console.log(err.response.data.message)
                // setError(err.response.data.message)
            })
    }

    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         naviagte('/Login')
    //     }
    // })
    return (
        <div>
            <Grid>
                <Paper style={paperStyle} elevation={10}>
                    <Grid align='center'>
                        <Avatar style={avatharStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Reset Password</h2>
                    </Grid>
                    {/* <p>Enter your Email ID</p> */}
                    <br />
                    {error ? <p style={{ color: "red", fontSize: '15px', textAlign: 'center' }}>{error}</p> : null}
                    {sucess ? <p style={{ color: "red", fontFamily: "sans-serif", textAlign: 'center' }}>*{sucess}*</p> : null}

                    <TextField label='Enter new Password'
                        variant="standard"
                        placeholder="Enter new Password"
                        fullWidth
                        type={'text'}
                        onChange={(e) => { handlePassword(e) }}
                        required />
                    <br />
                    <TextField label='Confirm new Password'
                        variant="standard"
                        placeholder="confirm new Password"
                        fullWidth
                        type={'password'}
                        onChange={(e) => handleConfirmPassword(e)}
                        required />

                    <Button type="submit" color="primary"
                        fullWidth
                        variant="contained"
                        style={buttonStyle}
                        onClick={resetpassword}>
                        Reset Password
                    </Button>
                    <br />
                    <br />
                    <Typography>
                        Return to &nbsp;
                        <Link href="/login" onClick={() => { handleChange("event", 2) }}>Login</Link>
                        &nbsp; Page
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )

}
export default ResetPassword;