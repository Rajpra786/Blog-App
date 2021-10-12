import axios from "axios";

const baseUrl = '/api'
const Delete = (endpoint) =>{
    return new Promise((resolve,reject)=>{
      axios.delete(baseUrl+endpoint)
      .then(function (response) {
        console.log(response);
        resolve(response.data);  
      })
      .catch(function (error) {
        reject(error);
      });
    })
}

export default Delete;