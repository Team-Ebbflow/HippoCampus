import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log('api/administrators/email=' + username + '&password=' + password);
        fetch('api/administrators/email=' + username + '&password=' + password)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    User ID : <input type="text" name="user_id" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit" value="submit">
                    Submit
                </button>
            </form>
            <button onClick={handleLogin}>Submit2</button>
        </div>
    );
}
