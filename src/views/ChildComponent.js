import React from "react";

class ChildComponent extends React.Component {
    state = {
        showjob: false
    }

    handlerShowHide = () => {
        this.setState({
            showjob: !this.state.showjob
        })
    };

    render() {
        let { listjob } = this.props;
        let { showjob } = this.state;
        return (
            <>
                {showjob === false ?
                    <div>
                        <button onClick={() => this.handlerShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="list-job">
                            {
                                listjob.map((iterm, index) => {
                                    return (
                                        <div key={iterm.id}>
                                            {iterm.title} - {iterm.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handlerShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;