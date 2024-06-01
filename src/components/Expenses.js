
import ExpenseItem from './ExpenseItem'

function Expenses(props) {

    return (
        <div className='expenses'>
            
            {props.items.map((expenseItem , index) => {

                return (
                    <ExpenseItem
                       key={index}
                       title={expenseItem.title}
                       amount={expenseItem.amount}
                       date={expenseItem.date}
                    ></ExpenseItem>
                )
            })}

        </div>
    )
}
export default Expenses