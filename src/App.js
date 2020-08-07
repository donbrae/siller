import React, {useState, useEffect} from 'react';
import Field from "./components/Field";
import Button from "./components/Button";
import './App.css';

function App() {
    const [account, setAccount] = useState(0); // Money in account
    const [perday, setPerday] = useState(0); // Days till payday
    const [calcul, setCalcul] = useState('x'); // Calcul
    const blankPending = {};
    const [pending, setPending] = useState([blankPending, blankPending, blankPending]);

    const handlePending = e => {
        const updatedPending = [...pending];
        updatedPending[e.target.dataset.id] = e.target.value;
        setPending(updatedPending);
    }

    const pendingList = pending.map((item, key) => {

        const id = `pending-${key}`;

        return (<div key={id}>
            <Field name="Pending transaction £" id={id} dataId={key} handler={handlePending}/>
        </div>);
    });

    function addPendingField() {
        setPending([
            ...pending, {
                ...blankPending
            }
        ]);
    }

    function goCalculate() {
        let pendingSum = 0;
        const pendingValues = pending.map((item, key) => {
            return parseFloat(item);
        });

        pendingValues.forEach((item, i) => {
            if (item)
                pendingSum += item;
            }
        );

        if (parseFloat(account) && parseFloat(perday) && pendingSum) {
            setCalcul(((parseFloat(account) - pendingSum) / parseFloat(perday)).toFixed(2));
        } else if (parseFloat(account) && parseFloat(perday)) {
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
        <Field id="account" value={account} name="Bank account balance £" handler={(e) => setAccount(e.target.value)}/>
        {pendingList}
        <Field id="perday" value={perday} name="Days left till payday" handler={(e) => setPerday(e.target.value)}/>
        <Button id="addPending" name="Add pending transaction" handler={addPendingField}/>
        <h2>Your daily budget is £{calcul}.</h2>
    </div>);
}

export default App;
