import axios from "axios";
const baseUrl = '/api'
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