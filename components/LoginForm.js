import React, {Component} from 'react';
import{View,Text,StyleSheet} from 'react-native';

import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword'
const LoginForm=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo/>
      </View>
      <View style={styles.EmailAndPassword}></View>
      <EmailAndPassword/>
    </View>
  );
};

const styles=StyleSheet.create({
container:{
  flex:1,  
},
logoContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  EmailAndPassword:{
    justifyContent:'center'
  },
});
export default LoginForm;