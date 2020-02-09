# Football App 

## Description
The app is a simple app that integrates firebase, intteracts with a football api at <a href="https://api.football-data.org">https://api.football-data.org</a>. The app fetches football leagues from all countries, clubs in those leagues and finally squads for all teams.

## Tools used

- Firebase SDK: I integrated the sdk and bundled the credentials key file in the different platforms directories. I  made use of:
    - firebase authentication
    - firebase firestore
    - firebase messaging

- React Native Keychain: I tried to demonstrate the usage of react native keychain as keystore for sensitive details. In this case I stored the keys for the api and server base url in on the firestore and retrieve them on login. Then i store them in the keychain and retrieve them securely when i need it.

- React Native SSL pinning:

- Redux:

## Makefile

I included a makefile that helps with simplifying certain tasks or command. It has commands to run ios, android and also tasks like pod install and opening in xcode.

## Project Structure

### File Structure

This are the different directories in the app and what they are for. 

#### Redux
The app uses redux for state management so the directories for redux are:
- actions
- reducers

#### Shared

Contains any components etc that can be shared among all components.

#### Screens

Contains all views or screen the app has

#### __tests__

Contains all tests for components, reducers, actions.

## What I would do to improve this project

- Written more tests
- Add test coverage
- Implement SSL pinning
- Encrypt the password using XOR during login and signup so the server can decrypt it
- Obfuscate the code to protect against malicious users (<a href="https://github.com/javascript-obfuscator/react-native-obfuscating-transformer">https://github.com/javascript-obfuscator/react-native-obfuscating-transformer</a>)
- Use flow-Typing for all components, actions, reducers etc.
- 

## Thank you
