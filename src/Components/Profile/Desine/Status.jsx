import React from "react";


class Status extends React.Component{
    state={
        editStatus:false
    }
    setStatusTrue=()=>{
        this.setState({
            editStatus:true
        })
    }
    setStatusFalse=()=>{
        this.setState({
            editStatus:false
        })
    }
    render() {
        return (
            <div> {!this.state.editStatus &&
                <div>
                    <span onClick={this.setStatusTrue} >{this.props.status} </span>
                </div>}
                {this.state.editStatus && <div>
                    <input value={this.props.status} onBlur={this.setStatusFalse} />
                </div>}

            </div>
        );
    }
}
export default Status