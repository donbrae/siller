import React, {useState, useEffect} from 'react';
import Field from "./components/Field";
import Button from "./components/Button";
import './App.css';

function App() {
    const handlePending = e => {
        setPending([
            ...pending,
            e.target.value
        ]);
    }

    const [account, setAccount] = useState(0); // Money in account
    const [perday, setPerday] = useState(0); // Days till payday
    const [calcul, setCalcul] = useState('x'); // Calcul
    const [pending, setPending] = useState([]); // Value of pending transactions
    const [pendingfield, setPendingField] = useState([<Field name="Pending transaction £" prefix="pending-" func={handlePending}/>]); // Pending transaction fields

    const pending_list = pendingfield.map((item, key) => <div key={key}>{item}</div>);

    function goCalculate() {

        // pending.map((item, key) => {
        //     console.log(item, key);
        // });

        // console.log(pending);
        if (parseFloat(account) && parseFloat(perday)) {
            setCalcul((parseFloat(account) / parseFloat(perday)).toFixed(2));
        } else {
            setCalcul('x');
        }
    }

    useEffect(() => {
        goCalculate();
        return() => {}
    }); // Runs on init and every update

    return (<div>
        <Field id="account" value={account} name="Bank account balance £" func={(e) => setAccount(e.target.value)}/> {pending_list}
        <Field id="perday" value={perday} name="Days left till payday" func={(e) => setPerday(e.target.value)}/>
        <Button id="add-pending" name="Add pending transaction" func={(e) => setPendingField([
                ...pendingfield,
                <Field name="Pending transaction £" prefix="pending-" func={handlePending}/>
            ])}/>
        <h2>Your daily budget is £{calcul}.</h2>
    </div>);
}

export default App;
