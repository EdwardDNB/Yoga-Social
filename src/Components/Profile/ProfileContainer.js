
import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import React from "react";
import {connect} from "react-redux";
import {getUserStatus, getUserProfile, setStatus} from "../Redux/profileReduser";
import { useParams} from 'react-router-dom'
import {withAuthRedirect} from "../Login/WithAuth";
import {compose} from "redux";





class ProfileContainer extends React.Component {
    componentDidMount() {
          let id=this.props.param.userId
        if(!id){id=this.props.userProfile.userId}
        this.props.getUserProfile(id)
        this.props.getUserStatus(id)
    }
    render=()=> {
        return <>
        <Desine userProfile={this.props.userProfile} userStatus={this.props.userStatus}
                setMyStatus={this.props.setStatus}
        />
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
        userStatus:state.ProfilePage.userStatus,
    }}
export default compose(
     withAuthRedirect,
     connect(mapStateToProps,{getUserProfile,
         getUserStatus,setStatus})
 )(TakeParams)

