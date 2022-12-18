import React, { useState } from 'react'
import './style.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

//import women from "../women.jpg"
function Home() {
    const [date, setDate] = useState(new Date())

    const [count,setCount] = useState(0)
    const [cycle, setCycle] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count-1)
    }
    
    const inc = () =>{
        setCycle(cycle +1)
    }
    const dec = () =>{
        setCycle(cycle -1)
    }


  return (
    <div className="home">
       <div className="widget">
        {/* <div className="womendiv">
       <img src={women} alt="women" className='women'/>
       </div> */}
       {/* <div className='womentext'>
        Strong.Health.Empower
       </div> */}
        <div className='firstwidget'>
        1. WHEN DID YOUR LAST PERIOD START?
        <div className='secondwidget'>
            <p>{date.getDate()}</p>
            <br/>
            <DatePicker
                    className="form-control"
                    selected={date}
                    onChange={startDate => setDate(startDate)}
                    name="selectDate"
                    dateFormat="MM/dd/yyyy"
                />
        </div>
        </div>
        <div className='firstwidget'>
        2. HOW LONG DOES A PERIOD LAST?
        <div className='secondwidget'>
            <button onClick={decrement} >-</button>
            <br />
            <p>{count}</p>
            <br />
            <button onClick={increment}>+</button>
        </div>
            </div>
            <div className='firstwidget'>
        3. HOW LONG IS YOUR CYCLE?
        <div className='secondwidget'>
            <button onClick={dec}>-</button>
            <br />
            <p>{cycle}</p>
            <br />
            <button onClick={inc}>+</button>
        </div>
            </div>
       </div>
       <button className='track'>Track now</button>
    </div>
  )
}

export default Home