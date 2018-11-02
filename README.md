# Demo Socket.io

#### How to work

```npm
npm install --save
npm i react-native-socket.io-client --save
npm start
react-native run-ios
react-native run-android
```
<br/>

```node
cd Server
node Server.js
```

#### How to fix Socket.io client missing file

- Copy folder **_Server/node_modules/socket.io-client_** into **_DemoSocketIO/node_modules/socket.io-client_**

```javascript
import io from 'socket.io-client/dist/socket.io.js'
```
