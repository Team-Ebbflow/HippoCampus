import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [result, setResult] = useState("");

    function handleLogin() {
        fetch('api/administrators/email=' + username + '&password=' + password)
            .then(response => response.json())
            .then(data => setResult(data))
            .then(console.log(result));
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
