import React, {Component} from 'react';

class AddTodo extends Component {
    state={
        icerik:''
    }

    handleChange=(e)=>{
        this.setState({
            icerik:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            icerik: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Yapılacek İş</label>
                    <input type="text" onChange={this.handleChange} value={this.state.icerik} />
                </form>
            </div>
        );
    }
}

export default AddTodo;