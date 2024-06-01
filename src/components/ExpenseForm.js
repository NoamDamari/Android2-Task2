
import './ExpenseForm.css'
import React , {useState} from 'react'

const ExpenseForm = () => {

    const [title , setTitle] = useState("");
    const [amount , setAmount] = useState("");
    const [date , setDate] = useState("");

    const titleChangeHandler = (event) => {

        console.log(event);
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {

        console.log(event);
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {

        console.log(event);
        setDate(event.target.value);
    }
    const submitHandler = (event) => {

        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        setTitle("")
        setAmount("")
        setDate("")

        fetch(
            "http://localhost:3000/addToMongo" + expenseData
        ).catch((err) => console.log(err))
    }

    return (

        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control ">
                    <label>Title</label>
                    <input type='text' 
                    value={title} 
                    onChange={titleChangeHandler}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input 
                    type='number' 
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={amountChangeHandler} >
                    </input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type='date' 
                    min="2019-01-01"
                    step="2024-06-01"
                    value={date}
                    onChange={dateChangeHandler} >
                    </input>
                </div>
            </div>
 
            <div className="new-expense__actions">
                <button type='submit' className='submit-button'>Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;