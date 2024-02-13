import React, { useState } from 'react';
import './SignUpPage.css';

function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [formSubmit, setFormSubmit] = useState(false);
    const [validationFinished, setValidationFinished] = useState(false);
    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (formSubmit) {
            setPasswordMatch(newPassword === e.target.value);
            setValidationFinished(true);
        }
    };

    const handleValidation = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            setFormSubmit(true);
            setPasswordMatch(true);
            e.target.reset();


        } else {
            setFormSubmit(true);
            setPasswordMatch(false);
            setValidationFinished(false);
        }
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        setPasswordMatch(true);
    };

    return (
        <div className='main_container1'>
            <div className="head_container1">
                <img src="/Images/logo.svg" alt="logo" />
            </div>
            <div className='downdiv1'>
                <div className='form_container1'>
                    <h1 className='heading1'>Welcome to Zycro!</h1>
                    <div className="form_controls1">
                        <form action="" onSubmit={handleValidation}>
                            <input type="text" placeholder='Full name' required />
                            <input type="email" placeholder='Email address' required />

                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                onChange={handleNewPassword}
                                required
                            />
                            <img
                                onClick={handlePassword}
                                className='eyeicon1'
                                src="/Images/atoms.svg"
                                alt=""
                            />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Confirm Password'
                                onChange={handleConfirmPassword}
                                required
                            />
                            {!passwordMatch && formSubmit && <p className='para1'>Passwords do not match.</p>}
                            <input className={passwordMatch && validationFinished ? 'valid_submit1' : 'normal_submit1'} type="submit" value='Signup' />
                        </form>
                    </div>
                <div className='old_user'>
                    <div className='para_div'>
                        <p className='para2'>Already have an account ?</p>
                    </div>
                    <div className='link'>
                        <a href="/">Login</a>
                    </div>
                </div>
                </div>
            </div>
            <div className='copyright1'>
                <img src="/Images/text.svg" alt="" />
            </div>
        </div>
    );
}
export default SignUpPage;