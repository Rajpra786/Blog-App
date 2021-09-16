import React, {Component} from 'react';
import UserContextProvider from './Context/UserContext'
import ThemeContextProvider from './Context/ThemeContext'
import CategoryBar from './Components/Category/CategoryBar/CategoryBar';
import SmallBlogCard from './Components/SmallBlogCard/SmallBlogCard';
import EditorsPickBlock from './Components/EditorsPick/EditorsPickBlock/EditorsPickBlock';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name :"Ram Babu",
      data : [1,2,3],
      D : [1,2,3,4]
    }
  }
  render(){
    return (
      <ThemeContextProvider>
        <UserContextProvider>
            <SmallBlogCard
            />
            <EditorsPickBlock
              data = {this.state.data} 
            />
            <CategoryBar
              data = {this.state.D}
            />
          </UserContextProvider>
      </ThemeContextProvider>
    )
  }
}

export default App;
