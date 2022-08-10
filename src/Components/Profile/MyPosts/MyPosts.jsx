import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, changeActionCreator} from "../../Redux/Store";


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {

        props.dispatch(addPostActionCreator())
    }

    let changePost = () => {
        let text = newPostElement.current.value
        props.dispatch(changeActionCreator(text))
    }

    let PostElement = props.PostData.map(p => <Post props messege={p.message} likeCounts={p.likeCounts}/>)
    return < div>
        <h4>My posts</h4>
        < div>
            <textarea onChange={changePost} value={props.text} ref={newPostElement} name="" id="" cols="40" rows="5"/>
            <div>
                <button onClick={addPost}> Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {PostElement}


        </div>
    </div>

}
export default MyPosts