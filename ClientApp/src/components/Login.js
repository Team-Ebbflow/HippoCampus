import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Login.css';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getLoginStatus();
    }, []);

    const handleLogin = async () => {
        const response = await fetch('api/administrators/email=' + username + '&password=' + password);
        const data = await response.json();
        if (data.toString() == '1')
        {
            window.location.href = 'management';
            return;
        }
        else
        {
            handleClickOpen();
        }
    }

    const getLoginStatus = async () => {
        const response = await fetch('api/administrators/login_status');
        const data = await response.json();
        if (data.toString() == 'true')
        {
            window.location.href = 'management';
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <form>
                <label>
                    User ID : <input type="text" name="user_id" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </form>
            <button onClick={handleLogin}>Submit</button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Authentication Error"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Password not matching or username not exists!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Try again
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
