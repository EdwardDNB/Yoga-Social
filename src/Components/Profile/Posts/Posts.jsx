import Post from './Post/Post'
import s from './Posts.module.css'
import React from "react";




const Posts = (props) => {

    let PostElement = props.PostData.map(p => <Post postCount={p.postCount} message={p.message}
                                                    likesCount={p.likesCount}/>)

    let PostMessage = React.createRef()
    let addPost = () => {
       props.addPost()
    }

    let ChangeMessage=()=>{
        let text = PostMessage.current.value
        props.ChangeMessage(text)

    }

    return <div className={s.content}>
        My post
        <div>
            New post
            <div>
                <textarea onChange={ChangeMessage}  value={props.TextData} ref={PostMessage} cols="30" rows="10"></textarea>
                <button onClick={addPost}>Send</button>

            </div>
        </div>
        {PostElement}


    </div>


}
export default Posts