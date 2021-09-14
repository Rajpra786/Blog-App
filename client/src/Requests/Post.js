import axios from "axios";

//endpoint will look like /users/session
const baseUrl = '/api'
// http://127.0.0.1:8081
const Post = (data, endpoint) =>{
    return new Promise((resolve,reject)=>{
      axios.post(baseUrl+endpoint, data)
      .then(function (response) {
        resolve(response.data);  
      })
      .catch(function (error) {
        reject(error);
      });
    })
}

export default Post;