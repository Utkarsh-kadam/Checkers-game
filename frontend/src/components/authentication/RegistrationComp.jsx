import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "./validate";
import styles from "./SignUp.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import { PulseLoader } from 'react-spinners';


function Registration() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
   
    IsAccepted: false,
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);


    // Create a request object
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      // Make a POST request to your server's register endpoint

      const response = await fetch("https://checkers-backend.onrender.com/auth/register", requestOptions);


      if (response.status === 201) {
        const data = await response.json();
        navigate("/"); 
      } else {
        
        notify("An error occurred while registering");
      }
    } catch (error) {
      console.log("Error:", error);
      notify("An error occurred while registering");
    }
    finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className="game-container">
     
    <div className={styles.container}>
    <form className={styles.formLogin} onSubmit={handleRegistration} >
      <h2>Sign Up</h2>
      <div>
        <div className={errors.username && touched.username ? styles.unCompleted : !errors.username && touched.username ? styles.completed : undefined}>
          <input type="text" name="username" value={data.username} placeholder="Name" onChange={changeHandler} onFocus={focusHandler}  />
         
        </div>
        {errors.username && touched.username && <span className={styles.error}>{errors.username}</span>}
      </div>


      <div>
        <div className={errors.email && touched.email ? styles.unCompleted : !errors.email && touched.email ? styles.completed : undefined}>
          <input type="text" name="email" value={data.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
         
        </div>
        {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div>
        <div className={errors.password && touched.password ? styles.unCompleted : !errors.password && touched.password ? styles.completed : undefined}>
          <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />

        </div>
        {errors.password && touched.password && <span className={styles.error}>{errors.password}</span>}
      </div>

      <div>

      {isLoading ? (
              <div className={styles.sweet_loading}>
              <PulseLoader color="#dea114" loading={isLoading} size={25} />
             </div>

            ) : (
              <button type="submit">Register</button>
            )}
        <span style={{ color: "black", textAlign: "center", display: "inline-block", width: "100%" }}>

         <h5> Already have a account?</h5> <Link className={styles.link} to="/">Login</Link>

        </span>
      </div>
    </form>
    <ToastContainer />
  </div>
  </div>
);
};

export default Registration;