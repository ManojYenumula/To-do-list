import React,{useState} from "react";

function ToDoList(){
    const [task,settask]=useState([])
    const [Newtask,setNewtask]=useState("")
     
    function handlechange(event){
       setNewtask(event.target.value)
    }
    

    function addtask(){

        if(Newtask.trim()!==""){


       settask(t=>[...task,Newtask])
       setNewtask("")
        }

    }

    function Delete(index){
     
        const updated=task.filter((_,i)=>i!==index)
        settask(updated)

    }

    function taskup(index){
        if(index>0)
        {
        const updated=[...task];
        [updated[index-1],updated[index]]=[updated[index],updated[index-1]];
        settask(updated)
        }

    }
    function taskdown(index){
     
        if(index<task.length-1)
            {
            const updated=[...task];
            [updated[index+1],updated[index]]=[updated[index],updated[index+1]];
            settask(updated)
            }
    

    }

    return(<div className="container">
        <h2>To-Do-List</h2>
        <input type="text" onChange={handlechange} placeholder="enter task.." value={Newtask}></input>
        <button  className="addtask" onClick={addtask}>AddTask</button>

        <ol>
            {task.map((task,index)=>
            <li key={index}>
            <span className="tasks">{task}</span>
            <button onClick={D=>(Delete(index))} className="deletebutton" >Delete</button>
            <button onClick={t=>(taskup(index))} className="upbutton">👆</button>
            <button onClick={t=>(taskdown(index))} className="upbutton">👇</button>
            </li>)}
        </ol>
        </div>
    )
}

export default ToDoList