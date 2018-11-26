import React, { Component } from 'react';

class AddProfile extends Component {

    constructor(){
        super();
        this.state ={
            newProfile:{}
        }
    }

    static defaultProps ={
        categories : ['Web Design', 'Web Development','Mobile Development']
    }  

    handleSubmit(e){
        if(this.refs.name.value === ''){
            alert('Name is required');
        }else{
            this.setState({newProfile:{
                name: this.refs.name.value,
                category: this.refs.category.value
            }}, function(){
               // console.log(this.state.newProfile);
               // this.props.AddProfile(this.state.newProfile);
               //debugger; 
               this.props.AddProfile(this.state.newProfile);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
        <div>
            <hr />
            <h3>START AddProfile.js</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Name </label><br />
                    <input type="text" ref="name" />
                </div>
                <div>
                    <label>Category</label><br />
                    <select ref="category">
                        {categoryOptions}
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
            <h3>END AddProfile.js</h3>
            <hr />
        </div>
        );
    }
}

export default AddProfile;