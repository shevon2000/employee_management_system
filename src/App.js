import './App.css';
import Employee from './components/Employee';

function App() {

  console.log('we are about to list employees');
  const showEmployees = true;

  return (
    <div className="App">
      {console.log('inside the return')}
      {showEmployees ?
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
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

  */
