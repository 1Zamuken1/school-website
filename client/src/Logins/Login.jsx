import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { UserStore } from "./UserStore";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.lenght > 20) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    this.setState({
      user_name: "",
      user_password: "",
      buttonDisabled: false,
    });
  }

  async doLogin() {
    if (!this.state.user_name) {
      return;
    }
    if (!this.state.user_password) {
      return;
    }

    this.setState({
      buttonDisabled: true,
    });

    try {
      let res = await fetch("/Login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: this.state.user_name,
          user_password: this.state.user_password,
        }),
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.user_name = result.user_name;
      } else if (result && result.success === false) {
        this.resetForm();
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      this.resetForm();
    }
  }

  render() {
    return (
      <div>
        Log in
        <InputField
          type="text"
          placeholder="Username"
          value={this.state.user_name ? this.state.user_name : ""}
          onChange={(val) => this.setInputValue("user_name", val)}
        />

        <InputField
          type="password"
          placeholder="Password"
          value={this.state.user_password ? this.state.user_password : ""}
          onChange={(val) => this.setInputValue("user_password", val)}
        />

        <SubmitButton 
          text='Login'
          disabled={this.state.buttonDisabled}
          onClick={ () => this.doLogin() }
        />
      </div>
    );
  }
}

export default Login;
/*export default function Login() {
  return <div>Login</div>;
}*/
