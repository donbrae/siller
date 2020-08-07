import React, {useState, useEffect} from 'react';
import Field from "./components/Field";
import './App.css';

function App() {
    const [account, setAccount] = useState('account');
    const [perday, setPerday] = useState('perday');

    useEffect(() => {
        console.log(perday);

        return() => {
            console.log('optional cleanup function');
        }
    }, []); // Runs on init and when value of 'perday' changes

    return (<div><Field id="account" name="Bank account balance" func={(e) => setAccount(e.target.value)}/><Field id="perday" name="Days left till payday" func={(e) => setPerday(e.target.value)}/>
        <h2>You can spend £{account / perday}   per day</h2>
    </div>);
}

export default App;
