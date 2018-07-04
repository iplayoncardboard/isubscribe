import React, {Component} from 'react';
import API from '../../../utils/API'
import { Input, FormBtn, TextArea } from "../../../components/Form"
import { stat } from 'fs';

   

 class NewSubscription extends Component{
    state={
    subscriptionName: '',
    description: '',
    selectedCategory:"",
    iconURL: '',
    url: '',
    price: [1,2,3],
    categories:[]
    }

    handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log('Submit Clicked')
        console.log(this.state);
        API.addSubscription({
            subscriptionName:this.state.subscriptionName,
            description: this.state.description,
            selectedCategory:this.state.selectedCategory,
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
//DOUBLE CHECK THIS
    getSubscriptions = () =>
    {
        API.getCategories()
        .then(response => {
            console.log(response)
            this.setState({categories:response.data})});
    }

    componentWillMount(){
        //API call to get categories
        this.getSubscriptions();
        
        //Create component for category dropdown
    }

    //To add a new price category make a component for price category that displays props.children
    //Make a button with a funtion that triggers on click
    //Make the function take the info from the form inputs and add it to the compnent. This should also update the state of this component's price property. 
    // props to Pass
    // {props.planName}
    // {props.price}
    // {props.frequency}
    // {props.default}
    // props.removeItem



    render(){
        return(
        <div className='form-container'>
        <form>
            <label>Subscription Name</label>
            <Input name='subscriptionName' value={this.state.subscriptionName} onChange={this.handleInputChange} type='text' className='sub-input'/>
            <label>Subscription Description</label>
            <TextArea name='description' value={this.state.description} onChange={this.handleInputChange} className='sub-input'/>
            <select name='category' onChange={this.handleInputChange}>
            {this.state.categories.map(category =>{
            if(category.active){
                return(
               
                    <option key={category._id} value={category.name}>{category.name} </option>
                )}
            })}
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