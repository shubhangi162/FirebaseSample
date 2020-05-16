import React, {Component} from 'react';
import{View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
import {RNS3} from 'react-native-aws3';
// import ReactS3 from 'react-s3';
// import firebase from 'firebase';


const config={
    keyPrefix: 'video/',
    bucket: "videomanager.com2",
    bucketName:'videomanager.com2',
    region:'us-east-2',
    accessKey:'AKIAUM3USZJP5ZLNRX7O',
    secretKey:'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',
    successActionStatus: 201,
    contentType:'video/mp4'
    
    
}
const options2 = {
     title: 'Select video',
     mediaType: 'video',
     path:'video',
     quality: 1,
    //  contentType:'video/mp4'
  };

export default class Articles extends Component{
    
    constructor(props){
        super(props);
      
       this.state = {
           videoSource:'',
         };
      }
      
     
      
      
      selectVideo = () => {
      
      
      ImagePicker.showImagePicker(options2, (response) => {
      console.log('Response = ', response);
      
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
      console.warn(source)
      
        this.setState({videoSource: source})
      
      
      }
      });
      
      
      }
      uploadVideo(videoSource){
        
        RNS3.put(videoSource, config)
      }
      
    

render(){
    return(
      
      <View>
      
          <Video source={this.state.videoSource}   
                 ref={(ref) => {
                   this.player = ref
                 }}                                      
                 onBuffer={this.onBuffer}                
                 onError={this.videoError}              
                
                 controls={true}
                 fullscreen={true}
                 style={styles.uploadImage}  />
      
      
          <TouchableOpacity onPress={this.selectVideo}>
            <Text>Select Video</Text>
          </TouchableOpacity>
         
          <TouchableOpacity  onPress={this.uploadVideo}>
            <Text>upload Video</Text>
          </TouchableOpacity>
        
      
      </View>
      
      );
      }
      
      
      
      }
      const styles = StyleSheet.create({
        uploadImage: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
      },
      btnSection: {
        width: 225,
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom:10
      },
      btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight:'bold'
      }
    });