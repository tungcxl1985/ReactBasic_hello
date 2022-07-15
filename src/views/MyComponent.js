import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Cao Xuân Lâm Tùng',
        company: 'VNPT Quảng Bình'
    };

    hanlderOnChangeName = (event) => {
        this.setState({
            company: event.target.value
        })
    };

    hanlderOnClickButton = () => {
        alert('Click Me!!!')
    };
    render() {
        return (
            <>
                <div className='firs'> Họ tên: {this.state.name} đẹp trai</div>
                <div className='secon'>
                    <input type="text" value={this.state.company}
                        onChange={(event) => this.hanlderOnChangeName(event)} />
                    Đơn vị: {this.state["company"]}
                </div>
                <div className='third'>
                    <button onClick={() => this.hanlderOnClickButton()}>
                        Click Me
                    </button>
                </div>
            </>
        )
    };
};

export default MyComponent;