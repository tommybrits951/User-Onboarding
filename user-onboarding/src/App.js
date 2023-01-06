import React, {useState, useEffect} from "react"
import axios from "axios"
import * as yup from "yup"
import './App.css';
import schema from "./Components/schema"
import Form from "./Components/Form"
function App() {
  const [users, setUsers] = useState([])
  const [formVals, setFormVals] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false
  })
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: ''
  })
  



  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }




  const postNewUser = (newUser) => {
    axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log("finally")
    })
  }
  const formUpdate = (name, value) => {
    validate(name, value)
    setFormVals({...formVals, [name]: value})
  }
  const formSubmit = () => {
    const newUser = {
      firstName: formVals.firstName,
      lastName: formVals.lastName,
      email: formVals.email,
      password: formVals.password,
      terms: formVals.terms
    }
    postNewUser(newUser)
    setFormVals({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: ''
    })
  }
  useEffect(() => {
    
    console.log(users)
  }, [users])
  return (
    <div className="App">
     <Form 
      values={formVals}
      update={formUpdate}
      submit={formSubmit}
      errors={formErrors}
     />
     {users.map((user, idx) => {
      return (
        <div key={idx}>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.createdAt}</p>
        </div>
      )
     })}
    </div>
  );
}

export default App;
