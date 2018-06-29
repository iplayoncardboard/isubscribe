import React, {Component} from 'react';
import API from '../../utils/API'
import { Input, FormBtn, TextArea } from "../../components/Form"
import { stat } from 'fs';

   

 class NewSubscription extends Component{
    state={
    subscriptionName: '',
    description: '',
    category:"",
    iconURL: '',
    url: '',
    price: [1,2,3],
    }

    handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log('Submit Clicked')
        console.log(this.state);
        API.addSubscription({
            subscriptionName:this.state.subscriptionName,
            description: this.state.description,
            category:this.state.category,
            iconURL:this.state.iconURL,
            url:this.state.url,
            price:this.state.price
        });
    }

    handleInputChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
        // console.log(this.state);
    }

    componentWillMount(){
        //API call to get categories
        //Create component for category dropdown
    }

    render(){
        return(
        <div className='form-container'>
        <form>
            <label>Subscription Name</label>
            <Input name='subscriptionName' value={this.state.subscriptionName} onChange={this.handleInputChange} type='text' className='sub-input'/>
            <label>Subscription Description</label>
            <TextArea name='description' value={this.state.description} onChange={this.handleInputChange} className='sub-input'/>
            <select name='category' onChange={this.handleInputChange}>
                <option value="Video Streaming">Video Streaming </option>
                <option value="Subscription Box">Subscription Box</option>
                <option value="Music Streaming ">Music Streaming </option>
                <option value="Food">Food</option>
                <option value="Gaming">Gaming</option>
                <option value="Movie Ticket">Movie Ticket</option>
                <option value="Pets">Pets</option>
            </select>
            <label>Company URL</label>
            <Input name='url' value={this.state.url} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Icon URL</label>
            <Input name='iconURL' value={this.state.iconURL} onChange={this.handleInputChange} type='text' className='user-input'/>
            <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
        </form>
    </div>
        )
    }
   
 }


export default NewSubscription;