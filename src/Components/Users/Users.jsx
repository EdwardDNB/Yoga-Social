
import React from "react";
import {Paginator} from "../../Common/Paginator/Paginator";
import {User} from "./User";


const Users=({users,totalUsersCountNow,pageSize,count,clickEvent,follow,isDisabling,unfollow})=>  {
       return  <div>
           <Paginator totalItemsCountNow={totalUsersCountNow} pageSize={pageSize}
                      count={count} clickEvent={clickEvent}/>
            {
                users.map(user => <User key={user.id} isDisabling={isDisabling}
                                     user={user} unfollow={unfollow} follow={follow} />)
            }
        </div>
    }



export default Users