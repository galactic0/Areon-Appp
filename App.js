import React from 'react';
import { StyleSheet, Text, View, Button, 
  TextInput, TouchableOpacity, 
   Image, } 
  from 'react-native';
  import MapView from 'react-native-maps';

import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Map Screen

class MapScreen extends React.Component{
   render(){ 
      return (  
         <MapView  style={{flex: 1}}       
          region={{latitude: 28.516023, longitude: 77.157068, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}    
          showUserLocation={true}
          followUserLocation={true}
          loadingEnabled={true} /> ); 
         }};


//(1) Welcome Screen

class HomeScreen extends React.Component {
  componentWillMount() {
    setTimeout(
      ()=> { 
        this.props.navigation.navigate('About')
       }, 5000
     );
  }
  render() {
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#97A891'}}>
        <Text style={{fontSize:36,color:'green',padding:5, marginBottom:10, fontWeight: 'bold'}}>
          Welcome To Areon
          </Text>
        <Image source={require('./Areonlogo.png')} style={{height:200, width:200,  margin:20}} />
        
        <Button style={{}}
          title="How it works"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

//(2) How it Works

class AboutScreen extends React.Component {
  componentWillMount() {
    setTimeout(
      ()=> { 
        this.props.navigation.navigate('LoginScreen')
       }, 5000
     );
    }
  render() {
    return (

      
      <View style={styles.container}>
        <View style={{}}>
          <Text style={{fontSize:24,color:'red',padding:5, }}>How It works</Text>
        </View>

         <View style={{alignItems:'center'}}>
           <Text style={{fontSize:18,color:'green',padding:5}}>RENT</Text>
            <Text style={{fontSize:18,textAlign:'center'}}>
            With easy Subscription and Pay Per Use Models.
            </Text>
           </View>


          <View style={{alignItems:'center'}}>
           <Text style={{fontSize:18,color:'green',padding:5}}>RIDE</Text>
            <Text style={{fontSize:18,textAlign:'center'}}>
            A riding experience which is connected, economical and enviromental friendly.
            </Text>
           </View>


           <View style={{alignItems:'center'}}>
           <Text style={{fontSize:18,color:'green',padding:5}}>RETURN</Text>
            <Text style={{fontSize:18,textAlign:'center'}}>
              Areon insures that your supply chain is cost-optimized leaving no penny unused.
            </Text>
           </View>
            
        <Button
          title="Login OR Sign Up"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}
// (3)Login Screen
class LoginScreen extends React.Component {
  
  
  render() {
    return (
    <View style={{backgroundColor:'steelblue',margin:5,}}>
      <View style={styles.logo}>
        <Text style={{color:'#ede1e3', fontSize:24, fontWeight:'bold', marginBottom:20, fontFamily:'sans-serif'}}>Ride with 
        <Text style={{color:'#66ffcc'}}> AREON </Text></Text>

  {/* Email input */}
        <View style={styles.inputbar}>
        <TextInput style={{ padding:10, width:300,textAlign:"center",borderWidth:1,
        backgroundColor:'#eeeefe',borderRadius:20}} 
        
        placeholder='Enter your Email' keyboardType='email-address' placeholderTextColor='black' returnKeyType='next'  />
        </View>

  {/* Password input */}
        <View style={styles.inputbar}>
        <TextInput 
        style={{ padding:10, width:300,textAlign:"center",
        backgroundColor:'#eeeefe',borderWidth:1,borderRadius:20}}
         
        placeholder='Enter Password' placeholderTextColor='black' 
        keyboardType='password' returnKeyType='go' secureTextEntry 
        />

        </View>
  {/* login button and forgot password */}
      <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
      <TouchableOpacity style={{backgroundColor:'#1cb867', padding:10, margin:10, 
          borderRadius:5, }} >
        <Text style={{textAlign:'center',fontWeight:'bold',color:'white',}}>Login</Text>
      </TouchableOpacity>

        <Text style={{backgroundColor:'#B56D09', padding:10, margin:10, 
          borderRadius:5,color:'white',}}>Forgot Password</Text>
      </View>
      
    </View>

 {/*button for register*/}
      <View style={{backgroundColor:'#d6461a', padding:10, margin:10,
          borderRadius:5}}>
      <Button 
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
{/*button for Map*/}
      <View style={{backgroundColor:'#d6461a', padding:10, margin:10,
          borderRadius:5}}>
      <Button 
          title="Map"
          onPress={() => this.props.navigation.navigate('MapScreen')}
        />
      </View>
       
  </View>
          
        
    
    );
  }
}
// (4) SignUp Screen
class Register extends React.Component{
  render() {
    return(
      <View style={{backgroundColor:'steelblue',margin:5,flex:1}}>
      <View style={styles.logo}>
        <Text style={{color:'#ede1e3', fontSize:24, fontWeight:'bold', marginBottom:20, fontFamily:'sans-serif'}}>Ride with 
        <Text style={{color:'#FF4C4C'}}> AREON </Text></Text>
  {/* Name input */}
        <View style={styles.inputbar}>
        <TextInput style={{ padding:10, width:300,textAlign:"center",borderWidth:1,
        backgroundColor:'#eeeefe',borderRadius:20}} 
        
        placeholder='Full Name' keyboardType='text' placeholderTextColor='black' returnKeyType='next'  />
        </View>
  {/* Mobile input */}
        <View style={styles.inputbar}>
        <TextInput style={{ padding:10, width:300,textAlign:"center",borderWidth:1,
        backgroundColor:'#eeeefe',borderRadius:20}} 
        
        placeholder='Mobile no' keyboardType='number-pad' placeholderTextColor='black' returnKeyType='next'  />
        </View>

  {/* Email input */}
        <View style={styles.inputbar}>
        <TextInput style={{ padding:10, width:300,textAlign:"center",borderWidth:1,
        backgroundColor:'#eeeefe',borderRadius:20}} 
        
        placeholder='Enter your Email' keyboardType='email-address' placeholderTextColor='black' returnKeyType='next'  />
        </View>

  {/* Password input */}
      <View style={styles.inputbar}>
        <TextInput 
        style={{ padding:10, width:300,textAlign:"center",
        backgroundColor:'#eeeefe',borderWidth:1,borderRadius:20}}
         
        placeholder='Enter Password' placeholderTextColor='black' 
        keyboardType='password' returnKeyType='go' secureTextEntry 
        />

     </View>

  {/*Confirm Password input */}
      <View style={styles.inputbar}>
          <TextInput 
          style={{ padding:10, width:300,textAlign:"center",
          backgroundColor:'#eeeefe',borderWidth:1,borderRadius:20}}
          
          placeholder='Confirm Password' placeholderTextColor='black' 
          keyboardType='password' returnKeyType='go' secureTextEntry 
          />

        </View>
        
    <View>
   
      <TouchableOpacity style={{backgroundColor:'#d6461a', padding:10, margin:10,
          borderRadius:5}}>
           <Text style={{textAlign:'center',fontWeight:'bold', color:'white',}}
           >Register</Text>
        </TouchableOpacity>

    </View>


      
    </View>


    
        
       
  </View>
    );
  }
}

// Navigations and Navigation Screen defines
const AppNavigator = createStackNavigator({
  Home: {
    title:'Home',
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  Register:{
    screen:Register,
  },
  MapScreen:{
    screen: MapScreen,
  }
  
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash:{
    flex:1,
    backgroundColor:'steelblue',
  },
  logo : {
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
    margin:40,
  },

  inputbar: {
    
    margin:10,
    
    
    },
    button:{
      justifyContent:'center',
      alignItems:'center',

    },
    login:{
      flex:1,
      backgroundColor:'steelblue',
      margin:5,
      
    }
});

  