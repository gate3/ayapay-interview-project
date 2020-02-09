import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout, Input, Button } from "@ui-kitten/components";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { loginAction } from "../actions/auth.action";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignInButtonPress = e => {
    // console.log(100, email, password);
    dispatch(loginAction(email, password));
    //navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Input
          textContentType="emailAddress"
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          textContentType="password"
          placeholder="password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.passwordInput}
        />
        <Button onPress={onSignInButtonPress}>Login</Button>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  passwordInput: {
    marginTop: 16
  }
});

export default Login;
