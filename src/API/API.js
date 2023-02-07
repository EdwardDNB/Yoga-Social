import axios from "axios";



export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "25f0b903-3cee-4b85-ab14-1376f9b3200e"
    }
});
export const usersApi={
    getUsers(count,pageSize){
        return  instance.get(`/users?page=${count}&count=${pageSize}`)
            .then(response=>response.data)
    },
    getUnfollow(id){
      return   instance.delete(`/follow/${id}`)
          .then(response=> {
          return     response.data
          })
    },
    getFollow(id){
        return   instance.post(`/follow/${id}`, '')
            .then(response=> {
               return  response.data
            })
    }

}
export const profileApi={
    getProfile(userId){
        return  instance.get(`/profile/${userId}`)
            .then(response=> {
               return  response.data
            })
    },
    getStatus(userId){
        return  instance.get(`/profile/status/${userId}`)
            .then(response=> {
                //console.log(response)
               return  response.data
            })
    }, updateStatus(status){
        return  instance.put(`/profile/status`,{status})
            .then(response=> {
               return  response.data
            })
    },
}
export const authApi={
    getLogin(){
        return  instance.get(`/auth/me`)
            .then(response => response.data
            )},
    Login(email,password,rememberMe=false){
        return  instance.post(`/auth/login`,{email,password,rememberMe})
            .then(response => response.data
            )},
    Logout(){
        return  instance.delete(`/auth/login`)
            .then(response => response.data
            )}
}