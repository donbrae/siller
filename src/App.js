import React, {useState, useEffect} from 'react';
import Field from "./components/Field";
import Button from "./components/Button";
import './App.css';

function App() {
    const [account, setAccount] = useState(0); // Money in account
    const [perday, setPerday] = useState(0); // Days till payday
    const [calcul, setCalcul] = useState('x'); // Calcul
    const [pending, setPending] = useState([<Field name="Pending transaction £" prefix="pending-"/>]); // Pending transactions

    const pendingList = pending.map((item, key) => <div key={key}>{item}</div>);

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
        <Field id="account" value={account} name="Bank account balance £" func={(e) => setAccount(e.target.value)}/> {pendingList}
        <Field id="perday" value={perday} name="Days left till payday" func={(e) => setPerday(e.target.value)}/>
        <Button id="add-pending" name="Add pending transaction" func={(e) => setPending([
                ...pending,
                <Field name="Pending transaction £" prefix="pending-"/>
            ])}/>
        <h2>Your daily budget is £{calcul}.</h2>
    </div>);
}

export default App;
