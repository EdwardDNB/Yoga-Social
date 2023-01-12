import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b9addcf5-3c00-459c-a722-4417794f0ffc',
  },
});

export const usersApi = {
  getUsers(count, page) {
    return instance.get(`/users?count=${count}&page=${page}`).then(response => response.data);
  },
  getUsersPage(count, pageNum) {
    return instance.get(`/users?count=${count}&page=${pageNum}`).then(response => response.data);
  },
  getFollowUser(userId) {
    return instance.post(`/follow/${userId}`, {}).then(response => response.data);
  },
  getUnfollowUser(userId) {
    return instance.delete(`/follow/${userId}`).then(response => response.data);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then(response => response.data);
  },
  setStatus(status) {
    return instance.put(`/profile/status`, {status}).then(response => response.data);
  },
};
export const authApi = {
  getAuth() {
    return instance.get(`/auth/me`).then(response => response.data);
  },
};
