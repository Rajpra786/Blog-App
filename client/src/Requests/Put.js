import axios from "axios";

//endpoint will look like /users/session
module.exports =  (data, endpoint,setLoading) =>{
    axios.put(endpoint, data)
      .then(function (response) {
        console.log(response);
        setLoading(false);
        return response;  
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        return error;
      });
}