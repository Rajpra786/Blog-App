import axios from "axios";

const baseUrl = '/api'
// http://127.0.0.1:8081
const Post = (data, endpoint) =>{
    return new Promise((resolve,reject)=>{
      axios.put(baseUrl+endpoint, data)
      .then(function (response) {
        resolve(response.data);  
      })
      .catch(function (error) {
        reject(error);
      });
    })
}

export default Post;