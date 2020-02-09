import { SOCCER } from "../shared/constants";
import * as Keychain from "react-native-keychain";
import axios from "axios";
import auth from "@react-native-firebase/auth";

export const getLeagues = () => dispatch =>
  dispatch({
    type: SOCCER.LEAGUES,
    async payload() {
      try {
        const serverCred = await Keychain.getGenericPassword();
        console.log(serverCred);
        const results = await axios.get(
          `${serverCred.username}competitions?areas=2072,2114,2224,2081`,
          {
            headers: {
              "X-Auth-Token": serverCred.password
            }
          }
        );
        return results.data.competitions;
      } catch (e) {
        console.log(100, e);
      }
    }
  });

export const getTeams = leagueId => dispatch =>
  dispatch({
    type: SOCCER.TEAMS,
    async payload() {
      try {
        const serverCred = await Keychain.getGenericPassword();
        const results = await axios.get(
          `${serverCred.username}competitions/${leagueId}/teams`,
          {
            headers: {
              "X-Auth-Token": serverCred.password
            }
          }
        );
        return results.data.teams;
      } catch (e) {
        console.log(100, e);
      }
    }
  });

export const getSquads = teamId => dispatch =>
  dispatch({
    type: SOCCER.SQUADS,
    async payload() {
      try {
        const serverCred = await Keychain.getGenericPassword();
        const results = await axios.get(
          `${serverCred.username}teams/${teamId}`,
          {
            headers: {
              "X-Auth-Token": serverCred.password
            }
          }
        );
        return results.data.squad;
      } catch (e) {
        console.log(100, e);
      }
    }
  });
