import React, {Component} from 'react';
import API from '../../utils/API'
import { Input, FormBtn, TextArea } from "../../components/Form"
import { stat } from 'fs';

   

 class NewSubscription extends Component{
    state={
    subscriptionName: '',
    description: '',
    categories:['A','B','C'],
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
            categories:this.state.categories,
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
            {/* {this.state.categories.map(category=>{
                return <Input className='sub-checkbox' id={category._id} key={category._id} />
            })} */}
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