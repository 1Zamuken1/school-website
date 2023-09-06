import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user] = ({
    user_name:"",
    user_password:"",
  });
  return (
    <div>
      <h1 className='text-xl5 font-bold text-center'>Estoy en Login</h1>
      <button>Login</button>
    </div>
  );
}
