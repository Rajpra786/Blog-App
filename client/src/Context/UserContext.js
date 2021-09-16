import React, {createContext, useState} from "react";
import Post from '../Requests/Post';
export const UserContext = createContext();

const UserContextProvider = props => {
    const [user, setUser] = useState({});

    const logout = () => {
        console.log("Logout");
        setUser({});
    };

    const login = Credential =>{
        const data = {
            email:Credential.email,
            password:Credential.password
        }
        Post(data,'/users/session').then((userData)=>{
          setUser(userData.user);
        }).catch((error)=>{
          console.log(error);
        })
    }
    
    return (
      <UserContext.Provider value={{user, login,logout}}>
        {props.children}
      </UserContext.Provider>
    );
  };

  
  export default UserContextProvider;