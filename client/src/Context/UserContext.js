import React, {createContext, useState} from "react";
import Post from '../Requests/Post';
export const UserContext = createContext();

const UserContextProvider = props => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const logout = () => {
        console.log("Logout");
        setUser({});
    };

    const login = Credential =>{
        const data = {
            email:Credential.email,
            password:Credential.password
        }
        setLoading(true);

        Post(data,'/users/session',setLoading).then((userData)=>{
          setUser(userData.user);
          setLoading(false);
        }).catch((error)=>{
          console.log(error);
          setLoading(false);
        })
    }
    
    return (
      <UserContext.Provider value={{user, login,logout}}>
        {props.children}
      </UserContext.Provider>
    );
  };

  
  export default UserContextProvider;