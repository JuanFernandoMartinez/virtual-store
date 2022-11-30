import './App.css';
import LoggedMenu from "./components/menu/LoggedMenu";
import UnLoggedMenu from "./components/menu/UnloggedMenu";
import React from "react";
import Header from "./components/bootstrapComponents/Header";
import {getCookies} from "./utils/sessionManager";
import AdminMenu from "./components/app/admin/AdminMenu";




class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  changePage = e=>{
    if (this.state.page === 0)this.setState({page: 1})
    else this.setState({page:0})
  }

  render(){
    let roll = getCookies()
    if (roll === "user"){
      return (
          <Header>
            <LoggedMenu></LoggedMenu>
          </Header>
      )
    }else if (roll === "admin"){
      return <Header>
       <div><AdminMenu></AdminMenu>  </div>
      </Header>
    }else return <Header>
       <UnLoggedMenu></UnLoggedMenu>
    </Header>
  }
}
export default App;
