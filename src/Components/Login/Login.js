import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [checkPassword, setCheckPassword] = useState('');
    const [validationComplete, setValidationComplete] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const [isValidLength, setIsValidLength] = useState(false);
    const [isValidUpperCase, setIsValidUpperCase] = useState(false);
    const [isValidNumber, setIsValidNumber] = useState(false);

    const navigate = useNavigate();

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setCheckPassword(newPassword);

        setIsValidLength(newPassword.length >= 8);
        setIsValidUpperCase(/[A-Z]/.test(newPassword));
        setIsValidNumber(/\d/.test(newPassword));

        setValidationComplete(
            newPassword.length >= 8 &&
            /[A-Z]/.test(newPassword) &&
            /\d/.test(newPassword)
        );

        if (formSubmitted && newPassword.length < 8) {
            
            setFormSubmitted(false);
        }

    };

    const handleFocus = () => {
        setPasswordFocused(true);
    };



    const handleSubmit = (e) => {
        console.log('Full Name:', e.target[0].value);
        console.log('Password:', checkPassword);
        e.preventDefault();
        e.target.reset();
        setFormSubmitted(true);
    }

    const handleClick = () => {
        if (validationComplete) {
            navigate('/dashboard')
        }
    }

    return (
        <div className='main_container'>
            <div className="head_container">
                <img src="/Images/logo.svg" alt="logo" />
            </div>
            <div className='downdiv'>
                <div className='form_container'>
                    <h1 className='heading'>Let's get to know each other</h1>
                    <div className="form_controls">
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Enter full name' required />
                            <div className='inp_pass'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    onChange={handlePasswordChange}
                                    onFocus={handleFocus}

                                    required
                                />
                                <img
                                    onClick={handlePassword}
                                    className='icon'
                                    src="/Images/atoms.svg"
                                    alt=""
                                />
                            </div>
                            {!validationComplete && formSubmitted && (
                                <div className='invalid'>
                                    <p>Invalid Password. Please enter a valid password.</p>
                                </div>
                            )}
                            {(passwordFocused || checkPassword.length > 0) && !formSubmitted && (
                                <div className='rad'>
                                    <label className='lab'>
                                        <input type="radio" checked={isValidLength} readOnly />
                                        8+ characters
                                    </label>
                                    <label className='lab'>
                                        <input type="radio" checked={isValidNumber} readOnly />
                                        1 number
                                    </label>
                                    <label className='lab'>
                                        <input type="radio" checked={isValidUpperCase} readOnly />
                                        1 uppercase
                                    </label>
                                </div>
                            )}
                            <input className={validationComplete ? 'valid_submit' : 'normal_submit'}
                                type="submit"
                                value='Continue'
                                onClick={handleClick} />
                        </form>
                    </div>
                    <div className='new_user'>
                        <div className='para_div'>
                            <p className='para2'>New User :</p>
                        </div>
                        <div className='link'>
                            <a href="/signup">SignUp?</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='copyright'>
                <img src="/Images/text.svg" alt="" />
            </div>
        </div>
    );
}

export default Login;