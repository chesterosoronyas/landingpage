"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Input, Typography } from "@mui/material";
const Email = () => {
  const [isValid, setIsValid] = useState(true);
  const isEmail = (email: string) => {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
      email
    );
  };

  const validator = (email: string) => {
    const isValidEmail = isEmail(email);
    if (isValidEmail) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <Box sx={{ marginBottom: "4rem" }}>
      <Input
        sx={{
          border: `1px solid ${isValid ? "#B8C7ED" : "#FF5466"}`,
          borderRadius: "2rem",
          color: "#B8C7ED",
          width: "421px",
          padding: "0.5rem 1rem",
          marginRight: "1rem",
        }}
        placeholder="Your email address..."
        onChange={(e) => validator(e.target.value)}
      />
     
      <Button
        sx={{
          backgroundColor: "#4C7BF3",
          color: "#ffffff",
          borderRadius: "2rem",
          padding: "0.5rem 1rem",
          width: "200px",
          height: "56px",
        }}
      >
        Notify Me
      </Button>
      {isValid ?null :(<Typography sx={{display:"flex" ,color:"#FF5466"}}>Please provide a valid email address</Typography>)}
    </Box>
  );
};

export default Email;
