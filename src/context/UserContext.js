import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../api/usersApi";

const USER_LOCAL_STORE_KEY = "shop-user";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_LOCAL_STORE_KEY);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.token) {
          setUser(parsedUser);
        } else {
          console.warn("User token missing in localStorage");
        }
      }
    } catch (error) {
      console.error("Error parsing user profile from localStorage", error);
    }
  }, []);

  const handleLogin = async (credentials) => {
    const { username, password } = credentials;
    try {
      const data = await api.login(username, password);
      if (data.token) {
        localStorage.setItem(USER_LOCAL_STORE_KEY, JSON.stringify(data));
        setUser(data);
      } else {
        console.error("Login failed: No token received");
      }
    } catch (error) {
      console.error("Error while logging in: ", error);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const data = await api.register(formData);
      const { message, ...userData } = data; // Avoid storing the message in the user object

      if (userData.token) {
        localStorage.setItem(USER_LOCAL_STORE_KEY, JSON.stringify(userData));
        setUser(userData);
      } else {
        console.error("Registration failed: No token received");
      }
    } catch (error) {
      console.error("Error while registering: ", error);
    }
  };

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER_LOCAL_STORE_KEY);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};