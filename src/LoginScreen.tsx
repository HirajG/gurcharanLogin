import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to back</Text>

      {/* Email Input */}
      <Text style={styles.inputTitle}>Email</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/icons/Message.png')} // Replace with your email icon image
          style={styles.icon}
        />
        <TextInput placeholder="Enter email" style={styles.textInput} />
      </View>

      {/* Password Input */}
      <Text style={styles.inputTitle}>Password</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/icons/Lock.png')} // Replace with your lock icon image
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Image
          source={require('./assets/icons/eye.png')} // Replace with your eye icon image
          style={styles.icon}
        />
      </View>

      {/* Forget Password */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgetPassword}>Forget password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/icons/fb.png')} // Replace with your Facebook icon image
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('./assets/icons/google.png')} // Replace with your Google icon image
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Not a member? <Text style={styles.signupLink}>Signup now</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
  },
  activeTab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#0A1950',
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 5,
  },
  inactiveTab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#9A9A9A',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#001A72',
  },
  inputTitle: {
    paddingBottom: 10,
    color: '#0A1950',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    marginBottom: 30,
  },
  forgetPassword: {
    color: '#008000',
    marginBottom: 20,
    textAlign: 'left',
  },
  loginButton: {
    backgroundColor: '#3669F0',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#9A9A9A',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  socialButton: {
    marginHorizontal: 10,
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 14,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  signupText: {
    textAlign: 'left',
    color: '#9A9A9A',
  },
  signupLink: {
    color: '#3366FF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
