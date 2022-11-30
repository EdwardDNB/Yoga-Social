let FOLLOWED = 'FOLLOWED';
let UNFOLLOWED = 'UNFOLLOWED';
let ADD_users = 'ADD-users';
export const actionAddUsers = (users) => ({type: ADD_users, users})
export const followedAC = (userID) => ({type: FOLLOWED, userID})
export const unfollowedAC = (userID) => ({type: UNFOLLOWED, userID})

let existingStore = {
    users: [
        /*{
            name: 'Ruslan',
            id: 1,
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: true,
            avatar: 'https://thumbs.dreamstime.com/b/boy-face-avatar-profile-picture-afroamerican-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149739088.jpg'
        },
        {
            name: 'Ludmila',
            id: 2,
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: false,
            avatar: 'https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg'
        },
        {
            name: 'Anna',
            id: 3,
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: true,
            avatar: 'https://t4.ftcdn.net/jpg/03/85/50/01/360_F_385500115_T8QiYsPeliQ5tE3npwOuJNUfunqFBo1U.jpg'
        },
        {
            name: 'Petr',
            id: 4,
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: false,
            avatar: 'https://cdn2.vectorstock.com/i/1000x1000/94/86/indian-boy-face-avatar-cartoon-vector-25919486.jpg'
        },
        {
            name: 'Egor',
            id: 5,
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: true,
            avatar: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png'
        },
        {
            name: 'Sergei',
            id: 6,
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: false,
            avatar: 'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cute-Anime-Boy-Profile-Picture.jpg'
        }*/
    ],

};
const usersReducer = (state = existingStore, action) => {

    switch (action.type) {
        case FOLLOWED: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })

            }

        }
        case UNFOLLOWED: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }

        }

        case ADD_users: {
            return {
                ...state, users:action.users
            }

        }
        default:
            return state
    }

}
export default usersReducer