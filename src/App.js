

import React, { Component } from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import { Route } from 'react-router-dom'
import Index from './components/Index'
import Task from './components/Task.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      hasError: false,
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('https://simpleauthentication00000.herokuapp.com/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }


  handle_login = (e, data) => {
    e.preventDefault();
    fetch('https://simpleauthentication00000.herokuapp.com/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        })
      }).catch(error => this.setState({ hasError: true, logged_in: false, username: '' }))
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('https://simpleauthentication00000.herokuapp.com/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        })
      })
  };


  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };
  erroroff = () => {
    this.setState({ hasError: false })
  }
  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <Login handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <Signup handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }
    // LINE BELOW !!! YOU FOUND A WAY TO EXECUTE A FUNCTION !!! to prevent the undefined !!
    const isResponseData = (this.state.username == undefined || this.state.username == 'This field may not be blank.'|| this.state.username == 'A user with that username already exists.') ? this.handle_logout() : ("")

    const tasklist = (this.state.logged_in === true) && <div className="taskslist">     <p><Task /></p>   </div>



    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>        <Nav className="nav"
        logged_in={this.state.logged_in}
        handle_login={this.handle_login}
        handle_signup={this.handle_signup}
        display_form={this.display_form}
        handle_logout={this.handle_logout}
        erroroff={this.erroroff}
      />
        <h3 style={{ padding: '5%' }}> Sorry , Incorrect User or password</h3>
        <Index erroroff={this.erroroff} />
      </div>
    }

    const notloggedin =
      <div className="App">
        <Route exact path="/" render={() => <Index erroroff={this.erroroff} />} />
        <Route exact path="/login/" render={() => <Login handle_login={this.handle_login} />} />
        <Route exact path="/signup/" render={() => <Signup handle_signup={this.handle_signup} />} />
      </div>
    const choice = (this.state.logged_in)
      ? (`Hello, ${this.state.username}`)
      : (notloggedin)
    return (
      <>
        <Nav className="nav"
          logged_in={this.state.logged_in}
          handle_login={this.handle_login}
          handle_signup={this.handle_signup}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        <div className="App">
          <h3>
            {choice}
          </h3>
          <div>
            {tasklist}
          </div>
        </div>
      </>
    );
  }
}
export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/Login'
// import Index from './components/Index'
// import Signup from './components/Signup'
// import Navbar from './components/Navbar'
// import { Route } from 'react-router-dom'


// function App() {

//   const [state, setState] = useState([])
//   const [form, setForm] = useState({
//     displayed_form : "",
//     logged_in : localStorage.getItem('token') ? true : false,
//     username:''
//   })


//   const fetchdata = () => {
//     if (form.logged_in){
//       fetch('http://localhost:8000/core/current_user/', {
//         headers : {
//           Authorization:`JWT ${localStorage.getItem('token')}`
//         }
//       })
//       .then(response => response.json())
//       .then(data => setForm({username: data.username}))
//     }
//   }

//   const handle_login = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/token-auth/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         setForm({
//           logged_in: true,
//           displayed_form: '',
//           username: json.user.username
//         });
//       });
//   };

//  const handle_signup = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/core/users/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         setForm({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username
//         });
//       });
//   };

//   const handle_logout = () => {
//     localStorage.removeItem('token');
//     setState({ logged_in: false, username: '' });
//   };

//   const display_form = form => {
//     setForm({
//       displayed_form: form
//     });
//   };

// console.log(state)



//   // let name = state.map((item,index) => {
//   //   return <div> {item.name}</div>
//   // })
//   return (

//     <div className="App">
//       <Navbar/>
//       <Route exact path="/" component={Index}/>
//       <Route exact path="/login/"  component={Login} />
//       <Route exact path="/signup/" component={Signup} />
//       <h3>
//           {state.logged_in
//             ? `Hello, ${state.username}`
//             : 'Please Log In'}
//         </h3>
//     </div>
//   );
// }

// export default App;
