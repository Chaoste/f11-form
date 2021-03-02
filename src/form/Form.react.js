import logo from './logo.svg';
import './Form.css';

function Form() {
  return (
    <div className="Form">
      <header className="Form-header">
        <img src={logo} className="Form-logo" alt="logo" />
        <p>
          Edit <code>src/Form.js</code> and save to reload.
        </p>
        <a
          className="Form-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Form;
