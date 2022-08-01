import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {


    let PostElement = props.PostData.map(p => <Post postCount={p.postCount} message={p.message}
                                                    likesCount={p.likesCount}/>)
    return <div className={s.content}>
        My post
        <div>
            New post
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>

            </div>
        </div>
        {PostElement}


    </div>


}
export default Posts