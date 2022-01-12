import React  from 'react'
import {useState} from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

 function FormA(){

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    //const[checkbox,setCheckbox]=useState(false);
    const[age,setAge]=useState();

    function print(){
        console.log(firstName);
        console.log(lastName);
        //console.log(checkbox);
        console.log(age);
    }
    
    return(
        <div>
        <form>
            <h1>Employee form</h1>
            <label>
            First Name: <input type="text" onChange={(e) => setFirstName(e.target.value)}></input><br/><br/>
            </label>
            <label>
            Last Name: <input type="text" onChange={(e)=>setLastName(e.target.value)}></input><br/><br/>
            </label>
            {/* <label>
            Checkbox: <input type="number" onChange={(e)=>setCheckbox(e.target.value)}></input><br/><br/>
            </label> */}
            <label>
            Age: <input type="number" onChange={(e)=>setAge(e.target.value)}></input><br/><br/>
            </label>
            <button onClick={print} type="button">Submit</button>
        </form>
        </div>
    )

 }

export default FormA;