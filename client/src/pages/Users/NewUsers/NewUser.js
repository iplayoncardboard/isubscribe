import React from 'react';

 const NewUser = props => (
     <div className='form-container'>
        <form>
            <label>Email Address</label>
            <input id='email' type='text' className='user-input'/>
            <label>password</label>
            <input id='password' type='text' className='user-input'/>
            <label>First Name</label>
            <input id='first-name' type='text' className='user-input'/>
            <label>Last Name</label>
            <input id='last-name' type='password' className='user-input'/>
            <label>Address</label>
            <input id='address-street' type='text' className='user-input'/>
            <label>City</label>
            <input id='address-city' type='text' className='user-input'/>
            <label>State</label>
            <input id='address-state' type='text' className='user-input'/>
            <label>Zip</label>
            <input id='address-zip' type='text' className='user-input'/>
            <button id='form-submit' className='form-btn'>Submit</button>
        </form>
    </div>
 )

export default NewUser;