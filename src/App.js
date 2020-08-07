import React, {useState, useEffect} from 'react';
import Field from "./components/Field";
import './App.css';

function App() {
    const [account, setAccount] = useState(0);
    const [perday, setPerday] = useState(0);
    const [calcul, setCalcul] = useState('x');

    function goCalculate() {

        if (parseFloat(account) && parseFloat(perday)) {
            setCalcul((parseFloat(account) / parseFloat(perday)).toFixed(2));
        } else {
          setCalcul('x');
        }
    }

    useEffect(() => {

        goCalculate();
        return() => {
            console.log('optional cleanup function');
        }
    }); // Runs on init and every update

    return (<div>
        <Field id="account" value={account} name="Bank account balance £" func={(e) => setAccount(e.target.value)}/>
        <Field id="perday" value={perday} name="Days left till payday" func={(e) => setPerday(e.target.value)}/>
        <h2>You can spend £{calcul} per day before you’re next paid.</h2>
    </div>);
}

export default App;
