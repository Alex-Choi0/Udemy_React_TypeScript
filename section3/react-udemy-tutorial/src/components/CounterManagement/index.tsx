import axios from "axios";
import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interfact";

class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState>{
    constructor(props: CounterManagementProps){
        super(props);

        this.state = {
            counter : 0,
            users : []
        }
        console.log('constructor')
    }

    handleAddClick = () => {
        this.setState({counter : this.state.counter + 1})
        // this.setState(function(prevState) {
        //     return {
        //         counter : prevState.counter+1
        //     }
        // }, function() {
        //     console.log('callback function')
        // }) 
    }

    handleMinusClick = () => {
        this.setState({counter : this.state.counter - 1})
    }

    static getDerivedStateFromProps(props : CounterManagementProps, state : CounterManagementState){
        console.log('getDerivedStateFromProps');

        return null
        // return props.ownerName === "Alex" ? {counter : 5} : null;
    }

    clickWindow = () => {
        this.setState({counter : this.state.counter + 1})
    }

    componentDidMount(): void {
        console.log('componentDidMount')
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            const data = res.data;
            const users = data.data.map((userData : any) => userData.first_name)
            this.setState({users})
        })

        window.addEventListener('click', this.clickWindow)
    }

    render(){
        console.log("rander")
        const { ownerName } = this.props;
        const {counter, users} = this.state;
        return (
            <div>
                <h1> Counter Management</h1>
                <h2> Owner Name : {ownerName}</h2>
                <h3> Counter : {counter}</h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
                <ul>{users.map(user => <li>{user}</li>)}</ul>
            </div>
        )
    }

}

export default CounterManagement;