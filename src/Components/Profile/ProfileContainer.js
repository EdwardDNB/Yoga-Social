
import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReduser";
import { useParams} from 'react-router-dom'
import {withAuthRedirect} from "../Login/WithAuth";





class ProfileContainer extends React.Component {
    componentDidMount() {
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

export default withAuthRedirect(connect(mapStateToProps,{
    setUserProfile
})(TakeParams))