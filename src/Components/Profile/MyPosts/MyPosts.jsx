import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
    /*let PostData = [
        {message: 'How are you?', likeCounts:0},
        {message: 'Do you one a party??', likeCounts:10}
    ]*/
let PostElement= props.PostData.map(p=><Post props messege={p.message} likeCounts={p.likeCounts}/>)
    return < div>
        <h4>My posts</h4>
        < div>
            <textarea name="" id="" cols="40" rows="5"></textarea>
            <div>
                <button> Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {PostElement}


        </div>
    </div>

}
export default MyPosts