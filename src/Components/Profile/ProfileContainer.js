
import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReduser";
import { useParams } from 'react-router-dom'





class ProfileContainer extends React.Component {
    componentDidMount() {
       // console.log(this.props)
        this.props.setUserProfile(this.props.param.userId)


    }

    render=()=> {
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

    }}

export default connect(mapStateToProps,{
    setUserProfile
})(TakeParams)