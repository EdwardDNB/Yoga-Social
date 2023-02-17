import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxCurrentSymbols, required} from "../../Validate/Validate";
import {Textarea} from "../../../Common/Textarea";

const MyPosts =React.memo( props => {
    console.log('RENDER YO')
    const onSubmit = (formData) => {
        console.log(formData)
        props.addPost(formData.newPost)
    }
    let PostElement = props.PostData.map(p => <Post props messege={p.message} likeCounts={p.likeCounts}/>)
    return < div>
        <h4>My posts</h4>
        <ProfileMessageReduxForm onSubmit={onSubmit}/>
        <div className={s.posts}>
            {PostElement}
        </div>
    </div>
});

const addProfileMessage=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field placeholder={"Write message"} component={Textarea} name={"newPost"}
        validate={[required,maxCurrentSymbols(10)]}/>
        <div>
            <button> Add post</button>
        </div>
    </form>
}
const ProfileMessageReduxForm=reduxForm({form:'addProfileMessage'})(addProfileMessage)

export default MyPosts