import React, { useState } from 'react'
import axios from "axios";
function Login() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            setUser(data);
        } catch {
            setError(true);
        }
        setLoading(false)
    };

    return (
        <>
            <p> Login page</p>
            <span>{user.name}</span>
            <form>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    value={password} />
                <button disabled={!username || !password}
                    onClick={handleClick}>
                    {loading ? "please wait" : "Login"}</button>

                <span data-testid='error'
                    style={{ visibility: error ? "visible" : "hidden" }}>Something Went Wrong </span>
            </form >
        </>
    )
}

export default Login

