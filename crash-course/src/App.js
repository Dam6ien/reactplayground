import { Route, Routes } from "react-router";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Favourites from "./pages/Favourites";

function App(){
  return(
    <div>
      <Routes>
      <Route path='/'>
        <AllMeetUpsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetUps />
      </Route>
      <Route path='/all-meetups'>
        <AllMeetUpsPage />
      </Route>
      </Routes>
    </div>
  );
}

export default App;