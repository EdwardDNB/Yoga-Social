import Post from './Post/Post'
import s from './Posts.module.css'
import React from "react";

const Posts = (props) => {


    let PostElement = props.PostData.map(p => <Post postCount={p.postCount} message={p.message}
                                                    likesCount={p.likesCount}/>)

    let PostMessage = React.createRef()
    let addPost = () => {
        let text = PostMessage.current.value
        props.addPost(text)
    }

    return <div className={s.content}>
        My post
        <div>
            New post
            <div>
                <textarea ref={PostMessage} cols="30" rows="10"></textarea>
                <button onClick={addPost}>Send</button>

            </div>
        </div>
        {PostElement}


    </div>


}
export default Posts