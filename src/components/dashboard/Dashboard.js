import React, { useState } from 'react'
import './Dashboard.css'
import logo1 from '../../images/star.png'
import logo2 from '../../images/study.jpg'
import logo3 from '../../images/avatar.png'

function Dashboard() {

const [todolist,setTodolist]=useState(["class","practice"])
const [inputvalue,setInputvalue]=useState("")
const [editmode,setEditmode]=useState(false)
const [editindex,setEditindex]=useState()


const addTodoitem=()=>{

    let copy=[...todolist]
    copy.push(inputvalue)
    setTodolist(copy)
    setInputvalue(" ")
}

const deleteTodo=(index)=>{

    let copy=[...todolist]
    copy.splice(index,1)
    setTodolist(copy)
    

}

const startEditing=(index,item)=>{

    setEditmode(true)

    setInputvalue(item)
    setEditindex(index)
}

const updateTodo=()=>{

    let copy=[...todolist]
    copy[editindex]=inputvalue
    setTodolist(copy)
    setEditmode(false)
    setInputvalue("")
}

  return (
<>

<div className="back">
    <div className='backbox1'> 
    <div className='avatar1'>
        <img src={logo3} alt="error"/>

        <div className='avatText'><h4>Welcome User!</h4></div>

    </div>

    <div className='searchicon1'>
        <input type="text" placeholder='search' /> 
    
         </div>
         
         <div className='backbox1h1'>
            <img src={logo1}  alt="error"/>
            <h3><b>All Tasks</b></h3>
         </div>
         
         <div className='backbox1h1'>
            <img src={logo1}  alt="error"/>
            <h3>Important</h3>
         </div>


         <div className='backbox1h1'>
            <img src={logo1}  alt="error"/>
            <h3>Panding</h3>
         </div>

         <div className='backbox1h1'>
            <img src={logo1}  alt="error"/>
            <h3>Completed</h3>
         </div>

         <div className='backbox1h1'>
            <img src={logo1}  alt="error"/>
            <h3>Not Important</h3>
         </div>

         <div className='box1img2'>
            <img src={logo2} alt="error" />

         </div>


    </div>

    <div className='backbox2'>
    <div className="heading">
    <h1>HEY THERE!</h1>
   
  </div>

  <div className="headingpara">

    <p>Whats your focus for today?</p>

  </div>
  <div className="input">

  <input type="text" placeholder='Add Task Here' value={inputvalue}onChange={(e)=>setInputvalue(e.target.value)}/>
  {
    editmode?<button type="button" class="btn btn-info" onClick={updateTodo}>UPDATE</button>  
    :<button type="button" class="btn btn-success" onClick={addTodoitem}>ADD</button> 
  
}
 
  </div>

  <div className='box1'>
    <div className='storetask'>
        {
            todolist.map((item,index)=>{
                return(
                    <div className='button' key={index}>* {item}
<div className='button2'>

<button type="button" class="btn btn-light" onClick={()=>startEditing(index,item)}>Edit</button>
<button type="button" class="btn btn-light" onClick={()=>deleteTodo(index)}>Delete</button>    
    </div>
                    </div>
                )
            })
                
        }
    </div>

  </div>

  


</div>


        
        </div>
  


  
</>
    )
}

export default Dashboard