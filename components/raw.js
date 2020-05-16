// render(){
//     return(
//       <View style={styles.container}>
//           <View style={styles.articlesContainer}>
//               <Text style={styles.heading}>Welcome to Articles</Text>
//               <TouchableOpacity onpress={this.myfun}>
//                   <Text>selsect video</Text>
//                   {/* <input type="file" onChange={this.uploadFile} /> */}
//               </TouchableOpacity>
  
//               <Text style={styles.content}>You are logged in from firebase</Text>
//               <TouchableOpacity style={{padding:20}} onPress={()=>firebase.auth().signOut()}>
//                   <Text style={{color:'#1B9CFC'}}>LogOut</Text>
//               </TouchableOpacity>
//           </View>
//       </View>
//     );
//   };
//   }
// console.warn(JSON.stringify(videoSource));

// import ImagePicker from 'react-native-image-picker';
// import Video from 'react-native-video';
// import{View,Text} from 'react-native';
// class Articles extends Component{

// constructor(props){
//   super(props);

//  this.state = {
//      videoSource:'',
//    };
// }

// let options2 = {
//     title: 'Select video',
//      mediaType: 'video',
//     path:'video',
//     quality: 1
//   };


// selectVideo = () => {


// ImagePicker.showImagePicker(options2, (response) => {
// console.log('Response = ', response);

// if (response.didCancel) {
//   console.log('User cancelled image picker');
// } else if (response.error) {
//   console.log('ImagePicker Error: ', response.error);
// } else if (response.customButton) {
//   console.log('User tapped custom button: ', response.customButton);
// } else {
//   const source = { uri: response.uri };


//   this.setState({videoSource: source})


// }
// });


// }
// render(){
//     return({
//         <View>
//         <Video source={this.state.videoSource}   // Can be a URL or a local file.
//         ref={(ref) => {
//           this.player = ref
//         }}                                      // Store reference
//         onBuffer={this.onBuffer}                // Callback when remote video is buffering
//         onError={this.videoError}               // Callback when video cannot be loaded
//         style={styles.backgroundVideo}
//         controls={true}
//         fullscreen={true}
//         style={styles.uploadImage} />
    
     
//  <Button small primary onPress={this.selectVideo}>
//    <Text>Select Video</Text>
//  </Button> 
//         </View>
//     })
// }


// ImagePicker.launchCamera(options, (response) => { let source = { uri: response.uri }; 
// this.setState({ avatarSource: source }); }); 
//  <View style={{ flex: 1 }}> <Video source={{uri: this.state.avatarSource}}/> </View>

    

    



// export default Articles;



      // RNS3.put(file, options).then(response => {
            //     if (response.status !== 201)
            //       throw new Error("Failed to upload image to S3");
            //     console.log(response.body);
            


      //       then(response => {
      //             if (response.status !== 201)
      //               throw new Error("Failed to upload image to S3");
      //             console.log(response.body);
      //         }
      //     }
             











            // 9.55
//             import React, {Component} from 'react';
// import{View} from 'react-native';
// import Video from 'react-native-video';
// import { RNS3 } from 'react-native-aws3';


//     const file = {
//         // `uri` can also be a file system path (i.e. file://)
//         uri: 'https://uilogos.co/img/logotype/circle.png',
//         name: "image.png",
//         type: "image/png"
//       }
//       const options = {
//         keyPrefix: "albums/",
//         bucket: "videomanager.com2",
//         region: "us-east-2",
//         accessKey: "your-access-key",
//         secretKey: "your-secret-key",
//         successActionStatus: 201
//       }
//       export default class Articles extends  Component{
//         constructor(props){
//               super(props);
            
//              this.state = {
//                  videoSource:'',
//                };
//             }
//      options={
//         title: 'Select video',
//         mediaType: 'video',
//         path:'video',
//         quality: 1
//      };
    
//     selectVideo = () => {

//         ImagePicker.showImagePicker(options2, (response) => {
//         console.log('Response = ', response);
        
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else if (response.customButton) {
//           console.log('User tapped custom button: ', response.customButton);
//         } else {
//           const source = { uri: response.uri };
        
//           this.setState({videoSource: source})
        
        
//         }
//         });
        
        
//         }
//     render(){
//         return({
//            <View>
            

//            </View>

        
//         });
//     }
     
// // }

// takePic(){
//       ImagePicker.showImagePicker({},(response)=>{
//           const file ={
//               uri:response.uri,
//               name:response.fileName,
//               type:'image/png'
//           }
          
//           RNS3.put(file,config)
//           .then((response)=>{

//           })
//       })
//   }



// import React, {Component} from 'react';
// import{View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import Video from 'react-native-video';
// import {RNS3} from 'react-native-aws3';
// import ReactS3 from 'react-s3';


// const config={
//     keyPrefix: 'video/',
//     bucket: "videomanager.com2",
//     region:'us-east-2',
//     accessKey:'AKIAUM3USZJP5ZLNRX7O',
//     secretKey:'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',
//     successActionStatus: 201,
//     contentType: 'video/mp4',
    
    
// }
// const options2 = {
//      title: 'Select video',
//      mediaType: 'video',
//      path:'video',
//      quality: 1,
//      type: 'video/mp4',
//   };

// export default class Articles extends Component{
//     constructor(props){
//         super(props);
      
//        this.state = {
//            videoSource:'',
//          };
//       }
      
     
      
      
//       selectVideo = () => {
      
      
//       ImagePicker.showImagePicker(options2, (response) => {
//       console.log('Response = ', response);
      
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = { uri: response.uri };
      
      
//         this.setState({videoSource: source})
      
      
//       }
//       });
      
      
//       }
//       uploadVideo(videoSource){
//         // console.log();
//         RNS3.put(videoSource, config)
//       }
      
    

// render(){
//     return(
      
//       <View>
      
//           <Video source={this.state.videoSource}   
//                  ref={(ref) => {
//                    this.player = ref
//                  }}                                      
//                  onBuffer={this.onBuffer}                
//                  onError={this.videoError}              
                
//                  controls={true}
//                  fullscreen={true}
//                  style={styles.uploadImage} />
      
      
//           <TouchableOpacity onPress={this.selectVideo}>
//             <Text>Select Video</Text>
//           </TouchableOpacity>
         
//           <TouchableOpacity  onPress={this.uploadVideo}>
//             <Text>upload Video</Text>
//           </TouchableOpacity>
      
      
      
//       </View>
      
//       );
//       }
      
      
      
//       }
//       const styles = StyleSheet.create({
//         uploadImage: {
//         width: 150,
//         height: 150,
//         borderColor: 'black',
//         borderWidth: 1,
//         marginHorizontal: 3
//       },
//       btnSection: {
//         width: 225,
//         height: 50,
//         backgroundColor: '#DCDCDC',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 3,
//         marginBottom:10
//       },
//       btnText: {
//         textAlign: 'center',
//         color: 'gray',
//         fontSize: 14,
//         fontWeight:'bold'
//       }
//     });