import {Text, View } from 'react-native'
import React from 'react'
import { loginStyles } from '../styles'

const ForgotPassword = () => {
  return (
    <View style={loginStyles.forgotPassContainer}>
      <Text style={loginStyles.forgotPassText}>Forgot password?</Text>
    </View>
  )
}

export default ForgotPassword

