import React from 'react'
import "../login.css"
const Register = () => {
    return (
        <div>
            {/* <Background /> */}
            <div className="main_container">
                <div className='main_form'>
                    <h3 className='head_form'>Login here</h3>
                    <form className='form_form' action="/register">
                        <label className='form_label' htmlFor="email">Username</label>
                        <div className='input_form'>
                            <input type="email" name="email" id="email" placeholder="" required="" />
                        </div>
                        <label className='form_label' htmlFor="password">Password</label>
                        <div className='pass_form'>
                            <input type="password" name="password" id="password" placeholder="" required="" />
                        </div>
                        <div className="main_a">
                            <a className='a_form' href="/home">
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
