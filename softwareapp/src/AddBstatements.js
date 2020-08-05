import React, {Component} from 'react'

class AddBstatements extends Component{
    state = {
            Content: ' '
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addBstatement(this.state);
        this.setState({
            content:' '
        })
    }

render(){
return(
        <div>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Add Expense:
                </label>
                <input type="text" onChange={this.handleChange} value={this.state.content} />

            </form>



        </div>

)
}


}
export default AddBstatements