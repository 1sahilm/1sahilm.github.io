import React from 'react';
import Link from 'next/link';
import Head  from 'next/head';

function login() {
  return (
    <div className='bg-img'>
<Head>
<link rel="canonical" href="https://aldi.github.io/bulma-login-template/" />
    <title>Login Page</title>
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css" />
</Head>
<section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <p className="subtitle is-4">Please login to proceed.</p>
              <br />
              <form>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input is-medium" type="email" placeholder="Email" />
                    <span className="icon is-medium is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-medium is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input is-medium" type="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Login</button><br />
                <p className="subtitle is-5">Login using Social Media</p>
                <div className="buttons is-centered" style={{marginBottom:"0"}}>
                  <a href="#" className="button is-medium is-facebook">
                    <span className="icon">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </span>
                  </a>
                  <a href="#" className="button is-medium is-twitter">
                    <span className="icon">
                      <i className="fab fa-twitter fa-lg"></i>
                    </span>
                  </a>
                  <a href="#" className="button is-medium is-github">
                    <span className="icon">
                      <i className="fab fa-github fa-lg"></i>
                    </span>
                  </a>
                </div>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="#">Sign Up</a> &nbsp;·&nbsp; <a href="#">Forgot Password</a> &nbsp;·&nbsp;
              <a href="#">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  )
}

export default login