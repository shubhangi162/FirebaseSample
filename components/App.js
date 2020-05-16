import React, {Component} from 'react';
import firebase from 'firebase';
import{View,Text,StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import Loading from './Loading';
class  App extends React.Component{
  state={
    loggedIn:null
  }
componentDidMount(){
  var firebaseConfig = {
    apiKey: "AIzaSyBxG0fggyk4YEs8Ls-yIuuAISwBrTQi4Rk",
    authDomain: "loginfirebaseapp-44a72.firebaseapp.com",
    databaseURL: "https://loginfirebaseapp-44a72.firebaseio.com",
    projectId: "loginfirebaseapp-44a72",
    storageBucket: "loginfirebaseapp-44a72.appspot.com",
    messagingSenderId: "219120699930",
    appId: "1:219120699930:web:5b3715049854751614dfa3",
    measurementId: "G-SH8JC469JN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({
          loggedIn:true
        })

      }else{
        this.setState({
          loggedIn:false
      
    })
}
})
}
renderContent=()=>{
  switch(this.state.loggedIn){
    case false:
      return<LoginForm/>
      case true:
        return<Articles/>
      default:
        return <Loading/>
  }
}
render(){
  return(
    <View style={styles.container}>
     {this.renderContent()}
    </View> 
  );
}
}


const styles=StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'center',
  
},
});
export default App;