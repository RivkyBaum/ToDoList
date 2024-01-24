import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5094';
// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     console.error('Error:', error);
//     return Promise.reject(error);
//   }
// );
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasks: async () => {
    const result = await axios.get('/item')    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post('/item', { name });
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/item/${id}`, { isComplete });
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/item/${id}`);
    return result.data;
  },
  register: async (username, password) => {
    debugger;
    const result = await axios.post(`/register/${username}/${password}`);
     alert(username+"נוספת בהצלחה!")
    return result.data;
    
  },
  // register: async(user)=>{
  //   debugger
  //   const result = await axios.post('/register', { user });
  //   return result.data;
  // },
};
