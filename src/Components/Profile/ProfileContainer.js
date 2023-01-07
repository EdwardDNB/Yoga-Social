
import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReduser";
import {Navigate, useParams} from 'react-router-dom'





class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setUserProfile(this.props.param.userId)
    }

    render=()=> {
        if(!this.props.isAuth)return <Navigate to='../login'/>
        return <>
        <Desine userProfile={this.props.userProfile}/>
        <MyPostsConteiner />
    </>
    }


}
const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}



let mapStateToProps=(state)=> {
    return{
        userProfile:state.ProfilePage.userProfile,
        isAuth: state.auth.isAuth
    }}

export default connect(mapStateToProps,{
    setUserProfile
})(TakeParams)