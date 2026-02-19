import React, { useState } from "react";

import {
  AdminRegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminRegisterStyles";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Admin Sign In", { email, password });
  };
  return (
    <AdminRegisterContainer>
      <h2>Admin Sign In</h2>
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
        <SubmitButton to="/admin/dashboard" onClick={handleSignIn}>
          Register
        </SubmitButton>
      </FormContainer>
    </AdminRegisterContainer>
  );
};

export default AdminSignIn;
