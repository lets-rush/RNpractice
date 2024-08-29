import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { First } from '../RNpractice/src/components/First/First';
import CustomButton from '../RNpractice/src/components/CustomButton/CustomButton';


interface State {
  textInputValue: string
  passwordInputValue: string,
}

interface Props {

}


enum InputType {
  EMAIL = 'Email',
  PASSWORD = 'Password'
}
class App extends React.Component<Props, State> {
  private passwordInputRef
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: "",
      passwordInputValue: "",
    }
  }

  updateTextInput = (val, type) => {
    switch (type) {
      case InputType.EMAIL: {
        this.setState({ textInputValue: val })
      }
        break;
      case InputType.PASSWORD: {
        this.setState({ passwordInputValue: val })
      }
        break;
    }
  }

  handleLogin() {

  }

  // thees functions below could be replaced by a switchCase function above
  // updateTextINputVallue = val => {
  //   this.setState({ textInputValue: val })
  // }
  // updatePasswordINputVallue = val => {
  //   this.setState({ passwordInputValue: val })
  // }

  render() {
    return (
      <First containerStyles={{ justifyContent: 'center' }}>
        <TextInput onSubmitEditing={() => this.passwordInputRef.onFocus()} onChangeText={val => this.updateTextInput(val, InputType.EMAIL)} style={styles.flexView} placeholder={"Email"} value={this.state.textInputValue} />
        <TextInput ref={ref => this.passwordInputRef = ref} onSubmitEditing={this.handleLogin} onChangeText={val => this.updateTextInput(val, InputType.PASSWORD)} style={styles.flexView} placeholder={"Password"} value={this.state.passwordInputValue} />
        {/* <Button title="Login" onPress={this.handleLogin} /> */}
        <CustomButton title="Login" onPress={this.handleLogin} />
      </First>

    )
  }
}


export default App

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', justifyContent: 'center' },
  flexView: { alignSelf: 'center', borderWidth: 2, width: 100, marginVertical: 10 },
})