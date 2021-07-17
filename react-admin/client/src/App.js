import React from "react"
import { Admin, Resource} from "react-admin"
import restProviderider from "ra-data-simple-rest"
import Dashboard from './components/Dashboard'
// import AdministratorList from "./components/AdministratorList"
// import RateList from './components/RateList'
// import UserList from './components/UserList'
// import ReferEarnList from './components/ReferEarnList'
// import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleIcon from '@material-ui/icons/People';
import ShopIcon from '@material-ui/icons/Shop';
import HomeIcon from '@material-ui/icons/Home';
import PostsList from './components/PostsList';
import PostEdit from './components/PostEdit';
import UsersList from './components/UsersList';
import Orders from './components/Orders'
import './app.css'
import './index.css'


function App() {
  return (
    <div className="App">
        <Admin dashboard={Dashboard}
        dataProvider={restProviderider("http://localhost:3000")} 
        icon={HomeIcon}>
        <Resource 
        name='posts' 
        list={PostsList}
        edit={PostEdit}
        icon={ShopIcon}
        />
        <Resource 
        name='users' 
        list={UsersList}
        icon={PeopleIcon}
        />
        <Orders />


        {/* <Resource 
        name='Orders' 
        list={ReferEarnList}
        icon={ShopIcon}
        />
        <Resource 
        name='User' 
        list={UserList}
        icon={PeopleIcon}
        />
        <Resource 
        name='Rate' 
        list={RateList}
        icon={TimelineIcon}
        /> */}

        
        
        </Admin>
        
    </div>
  )
}

export default App;