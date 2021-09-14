import axios from "axios";

const baseUrl = '/api'
const Get = (endpoint) =>{
    return new Promise((resolve,reject)=>{
      axios.get(baseUrl+endpoint)
      .then(function (response) {
        console.log(response);
        resolve(response.data);  
      })
      .catch(function (error) {
        reject(error);
      });
    })
}

export default Get;