import { createSelector } from 'reselect'
const users=(state)=>{
    return state.usersPage.users
}
export const superUsersSelector=createSelector(users,(users)=>{
   return  users.filter(u=>true)
})
export const pageSizeSelector=(state)=>{
    return state.usersPage.pageSize
}
export const countSelector=(state)=>{
    return state.usersPage.count
}
export const totalUsersCountSelector=(state)=>{
    return state.usersPage.totalCount
}
export const isFetchingSelector=(state)=>{
    return state.usersPage.isFetching
}
export const isDisablingSelector=(state)=>{
    return state.usersPage.isDisabling
}