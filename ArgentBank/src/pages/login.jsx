import React from 'react'
import { Helmet } from "react-helmet";
import Menu from "../containers/Menu/menu";
import Footer from "../containers/Footer/footer";
import Form from "../components/Form/Form";

const Login = () => {
  
  return (

    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Argent Bank - Home Page</title>
        <link rel="stylesheet" href="./css/main.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <Menu />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
