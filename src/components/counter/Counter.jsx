import { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count+by)
    }
    function decrementCounterParentFunction(by){
        setCount(count-by)
    }
    function resetCounter(){
        setCount(0)
    }
    return (
        <>
            <span className='totalCount'>{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
            <button className='resetButton' onClick={resetCounter}>Reset</button>
        </>
    )
}
 function CounterButton({ by,incrementMethod,decrementMethod }) {

    console.log(by);

    // function incrementButton() {
        // setCount(count + by);
        // incrementMethod(by);
        // console.log(count);
    // }

    // function decrementButton() {
        // setCount(count - by);
        // decrementMethod(by);
        // console.log(count);
    // }
    return (
        <div className="Counter">
            {/* <span className='count'>{count}</span> */}
            <div>
                <button className="couonterButton"
                    onClick={()=>incrementMethod(by)}
                >+{by}</button>
                <button className="couonterButton"
                    onClick={()=>decrementMethod(by)}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}