import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import styles from "./SignUp.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { PulseLoader } from 'react-spinners';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };



  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setIsLoading(true); 


    try {
      const response = await fetch('https://checkers-backend.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
    
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("username", data.username);
        navigate('/game');

    
      } else {
        // Handle login error
        const errorText = await response.text();
        notify(errorText);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
    finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className='game-container'>  
     

    <div className={styles.container}>
    <form className={styles.formLogin} onSubmit={handleLogin} autoComplete="off">
      <h2>Log In</h2>
      <div>
        <div>
          <input type="text" name="email"  placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
        
        </div>
      </div>
      <div>
        <div>
          <input type="password" name="password"  placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
          
        </div>
      </div>

      <div>
      {isLoading ? (
              <div className={styles.sweet_loading}>
              <PulseLoader color="#dea114" loading={isLoading} size={25} />
             </div>
            ) : (
              <button type="submit">Login</button>
            )}
        <span style={{ color: "black", textAlign: "center", display: "inline-block", width: "100%" }}>
         <h5>Don't have a account?</h5>  <Link className={styles.link} to="/Register">Create account</Link>
         <br/>
         <Link className={styles.link} to="/game">Skip</Link>
        </span>
      </div>

    </form>
    <ToastContainer />
  </div>
  </div>
);
};

export default Login;