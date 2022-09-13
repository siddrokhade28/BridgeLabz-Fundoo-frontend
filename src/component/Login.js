import { Avatar, Grid, Paper, TextField,Button, Typography,Link } from "@mui/material";
import React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = ({handleChange}) => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle ={margin:'60px 0 0 0' };
    const space ={margin:'10px 0'}
    return (
        <div>
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatharStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    
                    <TextField label='Email' variant="standard" placeholder="Enter User Email" fullWidth required />
                    <TextField label='Password' variant="standard" placeholder="Enter User Password" type={'password'} fullWidth required />
                    {/* 
                    for Check box
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup> */}
                    <br/>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={buttonStyle}>
                    SIGN IN
                    </Button>
                    <Typography style={space}>
                    <Link href="#">Forgot Password</Link>
                    </Typography>
                    <Typography>
                    Do You have an account?
                    <Link href="#" onClick={()=>{handleChange("event",1)}}>Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>

    )
}
export default Login;