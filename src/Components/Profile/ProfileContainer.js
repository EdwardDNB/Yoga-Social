
import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {axiosDefault} from "../Users/UsersConteiner";
import {setUserProfile} from "../Redux/profileReduser";





class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`/profile/${this.props.userProfile.userId}`, {...axiosDefault})
            .then(response => {
                for (let key in response.data.contacts) {
                    if (response.data.contacts[key] !== null) {
                        if (!response.data.contacts[key].includes('https://')) {
                            response.data.contacts[key] = 'https://'.concat(response.data.contacts[key])
                        }
                    }
                }
                this.props.setUserProfile(response.data)
            })

    }

    render=()=> {
        /*console.log(this.props)*/
        return <>
        <Desine userProfile={this.props.userProfile}/>
        <MyPostsConteiner />
    </>
    }


}

let mapStateToProps=(state)=> {
    return{
        userProfile:state.ProfilePage.userProfile,

    }}


export default connect(mapStateToProps,{
    setUserProfile
})(ProfileContainer)