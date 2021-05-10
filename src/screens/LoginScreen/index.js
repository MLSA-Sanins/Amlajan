import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,InteractionManager } from 'react-native';
import { width, height } from "../../utils/dimensions";
import { bindActionCreators } from 'redux';
import { initAsync } from "../../utils/googleSignIn";
import { initFbAsync } from "../../utils/faceBookSignIn";
import { fetchUser } from "../../redux/actions/userAction";
import { FETCHING_USER } from "../../redux/constants/index";
import FacebookButton from "../../components/FacebookButton";
import GoogleButton from "../../components/GoogleButton";
import FormInput from "../../components/FormInput";
import { LinearGradient } from 'expo-linear-gradient';
import { primary } from "../../theme/theme";
import { connect } from "react-redux";
import { signinUserGoogle,signinUserFb } from "../../redux/actions/userAction";

const LoginScreen = ({ navigation, signinUserGoogle, signinUserFb, dispatch, fetchUser }) => {
  
  const [screenLoading, setScreenLoading] = useState(true);
  
  const signinGoogle = () => {
    signinUserGoogle();
  }
  const signInFb = () => {
    signinUserFb();
  }

  useEffect(() => {
    //dispatch({type:FETCHING_USER})
    InteractionManager.runAfterInteractions(() => {
      initAsync(fetchUser, dispatch);
      initFbAsync(fetchUser, dispatch);
      setScreenLoading(false);
    })
  }, [])
  
  if (screenLoading) {
    return <ActivityIndicator/>
  }

  return (
    <View style={styles.Page}>
      <Text style={styles.header}>LOGIN</Text>
      <Text style={styles.subtitle}>Log In with one of the following options.</Text>
      <View style={styles.oAuth}>
        <GoogleButton press={()=>signinGoogle()}/>
        <FacebookButton press={()=>signInFb()}/>
      </View>
      <View style={styles.emailCredentials}>
        <FormInput name="mail" phd="Email"/>
        <FormInput name="lock" phd="Password" />
        <TouchableOpacity>
          <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={[primary.main, primary.light]}
          style={styles.button}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.signUpLink}>
              <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')} style={styles.signUpLink}>
            <Text style={styles.link}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ fetchUser,signinUserGoogle,signinUserFb }, dispatch),
  }
}

export default connect(null,mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
  header: {
    marginLeft: 30,
    marginTop: 150,
    fontSize: 30,
    fontWeight: "bold",
    color:primary.main
  },
  subtitle: {
    marginLeft: 30,
    marginTop: 30,
    fontSize:15 
  },
  oAuth: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around",
    paddingVertical: 30,
    paddingHorizontal:15,
    width: width,
    borderRadius: 20,
  },
  emailCredentials: {
    
  },
  label: {
    marginTop:20,
    marginLeft: 30,
    fontSize: 20,
    color:"gray"
  },
  button: {
    marginHorizontal: 30,
    marginTop: 30,
    borderRadius: 5,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation:5
  },
  buttonText: {
    color: "#fff",
    fontSize:22
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop:10,
  },
  bottomText: {
    
  },
  signUpLink: {
   lineHeight:10 
  },
  link: {
    marginLeft:5,
    color:primary.main
  }
})
