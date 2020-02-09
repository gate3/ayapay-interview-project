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

- Obsufication: I setup an obsuficator to make the code less readable to a malicious user.

- Redux:

## Makefile

I included a makefile that helps with simplifying certain tasks or command. It has commands to run ios, android and also tasks like pod install and opening in xcode.
