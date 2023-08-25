import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {
 const[title, setTitle] =  useState(props.title);
 console.log('ExpenseItem evaluated by React');

  // let title = props.title;
    function clickHandler() {
      //console.log('Kliknuto je!!!');
     // title = "Updated!";
     setTitle('Updated!');
      console.log(title);
    };

   
    return (
      
        <Card className= 'expense-item'>

      <ExpenseDate date= {props.date}/>
    <div className='expense-item__description'>
       <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
    
    </Card>
   
    );

    }
export default ExpenseItem;