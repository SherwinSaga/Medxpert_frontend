import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';



function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        
        fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password }), // changed 'Username' to 'username'
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Login Success") {
                navigate('/homepage');
            } else {
                alert('Invalid username or password');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    };
    


    return (
        <div className="login-container">
            <h6 className='loginHeader'>LOGIN</h6>
            <form onSubmit={handleSubmit}>
                <label className="userName">
                    USERNAME:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Enter Username"
                    />
                </label>
                <label className="passWord">
                    PASSWORD:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </label>
                <input type="submit" value="SUBMIT" id="btnSubmit"/>
            </form>
            <p id="noAcc">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}
export default Login;