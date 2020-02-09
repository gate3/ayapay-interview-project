import { LOGIN } from "../shared/constants";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import * as Keychain from "react-native-keychain";

const getServerCredentials = async () => {
  const snapShot = await firestore()
    .collection("api-servers")
    .doc("soccer-api")
    .get();
  const data = snapShot.data();
  if (data) {
    return data.details;
  }
  throw new Error("Error fething api server info.");
};

export const loginAction = (email, password) => dispatch =>
  dispatch({
    type: LOGIN,
    async payload() {
      try {
        const res = await auth().signInWithEmailAndPassword(email, password);
        const soccerApi = await getServerCredentials();

        await Keychain.setGenericPassword(
          soccerApi.server,
          soccerApi["api-key"]
        );
        console.log(400, res);
        return res;
      } catch (e) {
        console.log(e);
      }
    }
  });
