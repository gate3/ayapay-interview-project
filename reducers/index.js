import { combineReducers } from "redux";
import loginReducer from "./auth.reducer";
import { leaguesReducer, teamsReducer, squadReducer } from "./soccer.reducer";

export default combineReducers({
  loginReducer,
  leaguesReducer,
  teamsReducer,
  squadReducer
});
