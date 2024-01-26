import { useReducer } from "react";
import Button from '../Components/Button';

const INCREMENT_VALUE = 'increment';
const DECREMENT_VALUE = 'decrement';
const ADD_VALUE = 'add-value';  
const SET_ADDED_VALUE = 'setAddedValue';  

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_VALUE:
            return {
                ...state,
                count: state.count - 1,
            };
        case ADD_VALUE:  
            return {
                ...state,
                count: state.count + state.addValue,
                addValue: 0,
            };
        case SET_ADDED_VALUE: 
            return {
                ...state,
                addValue: action.payload,
            };
        default:
            // throw new Error('unexpected action type:' + action.type )
            return state;
    }
};

const CounterPage = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        addValue: 0,
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_VALUE,
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_VALUE,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_VALUE,
        });
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        dispatch({
            type: SET_ADDED_VALUE,
            payload: value,
        });
    };

    return (
        <div>
            <h1>Count is {state.count}</h1>
            <div className="flex flex-row space-x-4 mt-10 mb-10">
                <Button className='bg-blue-500 text-white px-4 py-2' primary onClick={increment}>Increment</Button>
                <Button className='bg-blue-500 text-white px-4 py-2' primary onClick={decrement}>Decrement</Button>
            </div>
            <div className="mb-10">
                <form onSubmit={handleSubmit}>
                    <label>Add to Count!</label>
                    <input
                        value={state.addValue}
                        onChange={handleChange}
                        type="number"
                        className="p-1 m-3 bg-gray-50 border border-gray-300"
                    />
                    <Button primary>Add number</Button>
                </form>
            </div>
        </div>
    );
};

export default CounterPage;
