import React from "react";

class Addcomponent extends React.Component {
    state = {
        title: 'Tùng',
        salary: 'Cao Xuân Lâm'
    }
    hanlderOnchangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    };
    hanlderOnchangeSalaryJob = (event) => {
        this.setState({
            salary: event.target.value
        })
    };
    hanlderSubmit = (event) => {
        event.preventDefault() //Ngăn không cho load lại page khi click input type submit
        //alert('Họ và tên' + this.state.title + this.state.salary)
        if (!this.state.title || !this.state.salary) {
            alert('Missing parame');
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    };
    render() {
        return (
            <>
                <form >
                    <label htmlFor="fname">Title Job:</label><br />
                    <input type="text"
                        value={this.state.title}
                        onChange={(event) => this.hanlderOnchangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary Job:</label><br />
                    <input type="text"
                        value={this.state.salary}
                        onChange={(event) => this.hanlderOnchangeSalaryJob(event)} /><br /><br />
                    <input type="Submit"
                        value="Submit"
                        onClick={(event) => this.hanlderSubmit(event)} />
                </form>
            </>
        );
    }
}

export default Addcomponent;