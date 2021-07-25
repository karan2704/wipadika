import React from 'react'

import './add.css'

function Add() {
    return (
        <div className="main-form">
            <p style={{ 'font-size':'1.2rem', 'margin-left': '10px'}}>Edit Profile</p>
            <form>
                <div className="linear-separator">
                    <div className='each-input'>
                        <label>Company (disabled)</label>
                        <input style={{'background': '#EEEEEE'}}type="text" name="company" placeholder="Code Inc." disabled/>
                    </div>
                    <div className='each-input'>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="michael23"/>
                    </div>
                    <div className='each-input'>
                        <label>Email address</label>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="linear-separator">
                    <div className='each-input'>
                        <label>First Name</label>
                        <input type="text" name="first" placeholder="Chet"/>
                    </div>
                    <div className='each-input'>
                        <label>Last Name</label>
                        <input type="text" name="last" placeholder="Faker"/>
                    </div>  
                </div>
                <div className="linear-separator">
                <div className='each-input'>
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Melbourne, Australia"/>
                </div>
                </div>
                <div className="linear-separator">
                    <div className='each-input'>
                        <label>City</label>
                        <input type="text" name="city" placeholder="Melbourne"/>
                    </div>
                    <div className='each-input'>
                        <label>Country</label>
                        <input type="text" name="country" placeholder="Australia"/>
                    </div>
                    <div className='each-input'>
                        <label>Postal Code</label>
                        <input type="text" name="pin" placeholder="ZIP Code"/>
                    </div>
                </div>
                <div className="linear-separator">
                <div className='each-input'>
                    <label>About me</label>
                    <input type="text" name="description" placeholder="About me"/>
                </div>
                </div>
                <button
                style={{
                    'background': '#53B8BB',
                    'border': '1px solid transparent',
                    'border-radius': '10px',
                    'width': '100px',
                    'height': '30px',
                    'color': 'white',
                    'font-size': '0.8rem',
                    'margin': '10px 5px'
                }}>UPDATE PROFILE</button>
            </form>
        </div>
    )
}

export default Add
