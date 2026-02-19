import React, { useState } from "react";
// import { FormContainer, InputField, StudentSignInContainer, SubmitButton } from '../styles/StudentSignInStyles'
import {
  FormContainer,
  InputField,
  SubmitButton,
  TeacherSignInContainer,
} from "../styles/TeacherSignInStyles";

const TeacherSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Teacher Sign In", { email, password });
  };
  return (
    <TeacherSignInContainer>
      <h2>Teacher Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton to="/teacher/dashboard" onClick={handleSignIn}>
          Register
        </SubmitButton>
      </FormContainer>
    </TeacherSignInContainer>
  );
};

export default TeacherSignin;
