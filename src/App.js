import React, {useState, useEffect} from 'react';
import Field from "./components/Field";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import './App.css';

function App() {
    const [account, setAccount] = useState(''); // Money in account
    const [perday, setPerday] = useState(''); // Days till payday
    const [calcul, setCalcul] = useState('x'); // Calcul
    const [saveLocal, setSaveLocal] = useState({foo: 'bar', checkedOrNot: ''}); // Save values in local storage (don't need 'foo' here; just demoing state having multiple attributes)
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
            <Field name="Pending transaction" id={id} dataId={key} handler={handlePending}/>
        </div>);
    });

    function addPendingField() {
        setPending([
            ...pending, {
                ...blankPending
            }
        ]);
    }

    function handleCheckbox(e) {
        if (e.target.type === 'checkbox' && !e.target.checked) {
            setSaveLocal({...saveLocal, checkedOrNot: ''});
        } else {
            setSaveLocal({...saveLocal, checkedOrNot: e.target.value});
        }
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

        console.log('merp');

        // > Store data locally
        return() => {}
    }); // Runs on init and every update

    return (<div>
        <Field id="account" value={account} name="Bank account balance" handler={(e) => setAccount(e.target.value)}/> {pendingList}
        <Field id="perday" value={perday} name="Days left till payday" handler={(e) => setPerday(e.target.value)}/>
        <Button id="addPending" class="btn btn-light mb-3" name="Add another pending transaction" handler={addPendingField}/>
        <Checkbox id="saveLocally" value={saveLocal} name="Save data locally" handler={handleCheckbox}/>
        <div className="form-text text-muted mb-3">Check this box to store data on your device so that it’s there the next time you visit siller.app. Data will never be uploaded to a server.</div>
        <h2>Your daily budget is currently {calcul}.</h2>
    </div>);
}

export default App;
