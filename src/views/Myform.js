import React from "react";
import ChildComponent from "./ChildComponent";
import Addcomponent from "./Examples/Addcomponent";


class Myform extends React.Component {
    state = {

        arrayjob: [
            { id: 1, title: 'Deverloper Team', salary: ' 5000$' },
            { id: 2, title: 'SCrum Master', salary: ' 7000$' },
            { id: 3, title: 'Product Owner', salary: ' 15000$' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrayjob: [...this.state.arrayjob, job]
        })
    }
    render() {
        return (
            <>
                <Addcomponent addNewJob={this.addNewJob}></Addcomponent>

                <ChildComponent
                    name={this.state.fisrtname + ' ' + this.state.lastname}
                    listjob={this.state.arrayjob}
                />
            </>
        )
    };
}
export default Myform;