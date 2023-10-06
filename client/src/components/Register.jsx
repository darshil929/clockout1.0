import React, { useState } from 'react'
import "../register.css"
const Register = () => {
    const [teamId, setTeamId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/team/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: teamId, pass: password }),
            });

            const data = await response.json();

            if (data.message === 'Login Successful!') {
                // Redirect to /home if login is successful
                window.location.href = '/home';
            } else {
                // Handle login failure
                alert("Wrong Credentials.")
            }
        } catch (error) {
            // Handle error
            console.error('An error occurred:', error);
        }
    };
    return (
        <div>
            <div className="main_container">
                <div className='main_form'>
                    <h3 className='head_form'>Login here</h3>
                    <form className='form_form' onSubmit={handleSubmit}>
                        <label className='form_label' htmlFor="email">Team Id:</label>
                        <div className='input_form'>
                            <input type="number" name="id" id="id" placeholder="" required="" onChange={(e) => setTeamId(e.target.value)} />
                        </div>
                        <label className='form_label' htmlFor="password">Password</label>
                        <div className='pass_form'>
                            <input type="password" name="pass" id="pass" placeholder="" required="" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="main_a">
                            <button className="a_form" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
