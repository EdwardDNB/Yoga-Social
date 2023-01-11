import React from "react";



class Status extends React.Component{
    state={
        editStatus:false,
        userStatus:this.props.userStatus
    }
    changeMyStatus=(e)=>{
        this.setState({
            userStatus:e.currentTarget.value
        })
    }
    setStatusTrue=()=>{
        this.setState({
            editStatus:true
        })
    }
    setStatusFalse=(e)=>{
        if(e.currentTarget.value!==this.props.userStatus){
            this.setState({
                editStatus:false,
            })
            this.props.setMyStatus(this.state.userStatus)
        }this.setState({
            editStatus:false
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userStatus!==this.props.userStatus){
            this.setState({
                userStatus:this.props.userStatus
            })
        }
    }

    render() {
        return (
            <div> {!this.state.editStatus && <div>
                    <span onClick={this.setStatusTrue} >{this.props.userStatus?this.props.userStatus:'No status'} </span>
                </div>}
                {this.state.editStatus && <div>
                    <input onChange={this.changeMyStatus}
                           value={this.state.userStatus} onBlur={this.setStatusFalse} />
                </div>}
            </div>
        );
    }
}
export default Status