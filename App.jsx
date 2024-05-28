import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expensestracker from './assets/screens/Expense'
import Expensesitem from './assets/screens/Expenseitem'

function App() {
  const[income,setIncome]=useState(0)
  const[expense,setExpense]=useState(0);

  const[data,setData]=useState([{
    title:"food",
    amount:500,
    id:1
  },{
    title:"food",
  amount:600,
  id:2
},{
  title:"food",
  amount:-700,
  id:3
}])




  
//   const data=[{
//     title:"food",
//     amount:500,
//     id:1
//   },{
//     title:"food",
//   amount:600,
//   id:1
// },{
//   title:"food",
//   amount:-700,
//   id:1
// }]

const handleClick=(Value)=>{
  let id =  [data.length-1].id+1;
  setData([...data,{...Value,id:id}])
  if(Value.amount>0){
    setIncome(income+Number(Value.amount))

  }else{
    setExpense(expense+Number(Value.amount))

  }

}
const handledelete=(Value)=>{
  const updatedData=data.filter(details=>details.id !==Value.id);
  setData(updatedData)
  if(Value.amount>0){
    setIncome(income-Number(Value.amount))

  }else{
    setExpense(expense-Number(Value.amount))

  }
}
//const [isEdit,setEdit]=usestate(false)
  //  cost 
       //pdkfk dl;mopr is 
    //}
      

  useEffect(()=>{
    
    data.map((details,i)=>{
      if(details.amount>0){
        setIncome((income)=>income+details.amount)
      }else{
        setExpense((expense)=>expense+details.amount)
      }
    })
  },[])

  return (
    <>
    <div>
      <div>Expense Tracker</div>
      <div className='income-expense-container'>
        <div className='income'>
          <div className='title'>Income</div>
          <div>{income}</div>
        </div>
        <div className='block'></div>
          <div className='expense'><div className='title'>Expense
            
          </div>
          <div>{expense}</div> 
            </div>
            

      </div>



    </div>
    <Expensestracker handleClick={handleClick}/>
    {
      data.map((details,index)=>{
        return <div key ={index} className="expense-item-container">
        <div className={`expense-item ${details.amount>0?"positive":"negative"}`}>
            <div>
            <div >{details.title}</div>
            <div >{details.amount}</div>
            
        </div>
    </div>
    <button onClick={()=>handledelete(details)} className="delete-btn">Delete</button>
    </div>

      })
    }
    
    </>

  )
}

export default App
