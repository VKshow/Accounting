import { Component } from 'react';

// import './employees-add-form.css'

import './employee-add-form.scss';


class EmployeesAddForm extends Component {
    
        
        state = {
            name: '',
            salary: '',
            isNameEmpty: false,
            isSalaryEmpty: false,
        }
    

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isNameEmpty: false, 
            isSalaryEmpty: false,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if (this.state.name.trim() === '') {
            this.setState({ isNameEmpty: true });
        }

        if (!this.state.salary) {
            this.setState({ isSalaryEmpty: true });
        }

        if (this.state.name.length < 3 || !this.state.salary) return;

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            isNameEmpty: false,
            isSalaryEmpty: false,
        })
    }

    
    

    render(){
        const {name, salary, isNameEmpty, isSalaryEmpty} = this.state;
        

        return(
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className = {`form-control new-post-label ${isNameEmpty ? 'red' : ''}`}
                        
                        placeholder="Name" 
                        name = 'name'
                        value = {name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className = {`form-control new-post-label ${isSalaryEmpty ? 'red' : ''}`}
                        
                        placeholder="Salary in $?" 
                        name = 'salary'
                        value = {salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Add</button>
                </form>
            </div>
        );
    }
}



export default EmployeesAddForm;