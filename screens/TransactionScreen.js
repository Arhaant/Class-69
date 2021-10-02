import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Permissions from "expo-permissions"
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends Component {
  constructor() {
    super()
    this.state = {
      buttonState: "normal",
      hasCameraPerms: null,
      scanned: false,
      scannedData: ""
    }
  }

  getCameraPerms = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      buttonState: "clicked",
      hasCameraPerms: status === "granted",
      scanned: false
    })
  }

  handleBarcodeScanner = async ({type , data}) => {
    
    this.setState({
      scannedData: data,
      buttonState: "normal",
      scanned: true
    })
  }

  render() {
    const { buttonState, hasCameraPerms, scanned, scannedData } = this.state

    if (buttonState === "clicked" && hasCameraPerms === false) {
      return (
        <Text>Permission Denied</Text>
      )
    }

    else if (buttonState === "clicked" && hasCameraPerms === false) {
      return (
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarcodeScanner}
          style={StyleSheet.absoluteFillObject}></BarCodeScanner>
      )
    }

    else {

      return (
        <View>
          <Text>{hasCameraPerms?scannedData:"Request Camera Permission"}</Text>
          <TouchableOpacity style={styles.buttonImage} onPress={this.getCameraPerms}><Text style={styles.textStyle}>Click to scan</Text></TouchableOpacity>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  buttonImage: {
    backgroundColor: "cyan",
    borderRadius: 20,
    width: 70,

  },

  textStyle: {
    textAlign: "center"
  }
})