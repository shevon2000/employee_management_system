import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  
  //let role = 'dev';
  const [role, setRole] = useState('dev');
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ?
        <>
          <input 
            type="text" 
            onChange={(e) => {
              console.log(e.target.value);
              //role = e.target.value;
              setRole(e.target.value);
            }}
          />

          <Employee name="Shevon" role="Intern" />
          <Employee name="Jaden" role={role} />
          <Employee />
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;

/* 

  ternary operator,
    {condition ? if ture : if false}
  -------------------------------------------------------------------------------------------------------------

  react components always return a single element (html)
    so if we have multiple to return, we can put them into a single div or single html element.
  -------------------------------------------------------------------------------------------------------------

  component nesting
    inside App() component we have Employee components, and they donnot need to know about the parent component
  -------------------------------------------------------------------------------------------------------------

  without using states, target value is displayed on the console
    but it doesn't update on Employee component(role)
  -------------------------------------------------------------------------------------------------------------

  structure of using useState
    const [variable name, variable prefix with set] = useState('any default value');
  -------------------------------------------------------------------------------------------------------------

  never assign avalue to a variable directly,
    always go through set_variable (setRole)
    */
