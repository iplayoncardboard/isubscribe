import React, {Component} from 'react';
import API from '../../../utils/API'
import { Input, FormBtn } from "../../../components/Form"

   

 class NewUser extends Component{
    state={
        email:"",
        password:"",
        firstName:"",
        lastName:"",
        street:"",
        apartment:"",
        city:"",
        state:"",
        zip:"",
        age:""
    }

    handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log('Submit Clicked')
        API.addUser({
            email:this.state.email,
            password: this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age,
            address:{
                street:this.state.street,
                apartment:this.state.apartment,
                city:this.state.city,
                state:this.state.state,
                zip: this.state.zip,
            }
        });
        console.log(this.state);
    }

    handleInputChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
        // console.log(this.state);
    }

    render(){
        return(
        <div className='form-container'>
        <form>
            <label>Email Address</label>
            <Input name='email' value={this.state.email} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>password</label>
            <Input name='password' value={this.state.password} onChange={this.handleInputChange} type='password' className='user-input'/>
            <label>First Name</label>
            <Input name='firstName' value={this.state.firstName} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Last Name</label>
            <Input name='lastName' value={this.state.lastName} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Age</label>
            <Input name='age' value={this.state.age} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Street</label>
            <Input name='street' value={this.state.street} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Apartment Number</label>
            <Input name='apt' value={this.state.apartment} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>City</label>
            <Input name='city' value={this.state.city} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>State</label>
            <Input name='state' value={this.state.state} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Zip</label>
            <Input name='zip' value={this.state.zip} onChange={this.handleInputChange} type='text' className='user-input'/>
            <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
        </form>
    </div>
        )
    }
   
 }


export default NewUser;