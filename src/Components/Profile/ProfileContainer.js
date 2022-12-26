
import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profileReduser";
import { useParams } from 'react-router-dom'
import {profileApi} from "../../API/API";





class ProfileContainer extends React.Component {
    componentDidMount() {
        profileApi.getProfile(this.props.param.userId)
            .then(data => {
                for (let key in data.contacts) {
                    if (data.contacts[key]) {
                        if (!data.contacts[key].includes('https://')) {
                            data.contacts[key] = 'https://'.concat(data.contacts[key])
                        }
                    }
                }
                this.props.setUserProfile(data)
            })

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