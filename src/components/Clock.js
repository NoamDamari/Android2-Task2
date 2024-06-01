
import react, {useState , useEffect} from 'react';
import './Clock.css'

function Clock(props) {

    const [time , setTime] = useState(new Date())

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(interval);

    } ,[])

    return (

        <div className='clock-text'>
            <h2>Current Time</h2>
            <h3>{time.toLocaleTimeString()}</h3>
        </div>
    )
};

export default Clock;