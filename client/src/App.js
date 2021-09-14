import React, {Component} from 'react';
import UserContextProvider from './Context/UserContext';
import Box from './Components/box';
import ThemeContextProvider from './Context/themeContext';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name :"Ram Babu"
    }
  }

  render(){
    return (
      <ThemeContextProvider>
        <UserContextProvider>
          <Box/>
        </UserContextProvider>
      </ThemeContextProvider>
    )
  }
}

export default App;
