import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('users')) {
      console.log(localStorage.getItem('users'));
    } else {
    }
  }, [localStorage.getItem('users')]);
  useEffect(() => {
    if (localStorage.getItem('users')) {
      const getData = () => {
        try {
          const jsonValue = localStorage.getItem('users');
          setActive(jsonValue);
        } catch (error) {
          console.log(error);
        }
      };

      const interval = setInterval(getData, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      const adminsData = () => {
        try {
          const jsonValue = localStorage.getItem('admin');
          setActive(jsonValue);
        } catch (error) {
          console.log(error);
        }
      };

      const interval = setInterval(adminsData, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  console.log("=======>Theproof", active);

  useEffect(() => {
    const fetchUserData = async (active) => {
      if (localStorage.getItem('users')) {
        try {
          const response = await axios.get(
            `http://localhost:8080/sihs/controll.php?users=${active}`
          );
          if (response.data) {
            setUser(response.data);
            if (Object.keys(response.data).length !== 0) {
              setLoading(false);
            }
          } else {
            // setUser(null);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        // setUser(null);
        setTimeout(() =>{
          setLoading(false)
              },5000);
      }
    };

    const interval = setInterval(() => {
      fetchUserData(active);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  useEffect(() => {
    const fetchUserData = async (active) => {
      if (localStorage.getItem('admin')) {
        try {
          const response = await axios.get(
            `http://localhost:8080/sihs/admin.php?users=${active}`
          );
          if (response.data) {
            setUser(response.data);
            if (Object.keys(response.data).length !== 0) {

              setLoading(false);
            }
          } else {
            // setUser(null);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        // setUser(null);
        setTimeout(() =>{
    setLoading(false)
        },5000);
    
      }
    };

    const interval = setInterval(() => {
      fetchUserData(active);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  const theusersession = () => {
    // Handle the user session
  };

  if (!user) {
    console.log("Hill");
  }

  const logged = (nownow) => {
    setLoading(true);
    setActive(nownow)
  };
  

  return (
    <AuthContext.Provider value={{ logged, user, theusersession, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
