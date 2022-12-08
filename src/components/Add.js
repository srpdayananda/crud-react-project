import React, {useState} from "react";
import  {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employee";
import { v4 as uuid} from "uuid";
import { Link, useNavigate} from "react-router-dom";

function Add() {

    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    
    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        
        let a = name,
        b = age;

        Employees.push({id: uniqueId, Name: a, Age : b})

        history('/');
    }

    const handleBack = () => {
        history('/');
    }


    return(
        <div >
            <Form className="d-grid gap-2" style={{margin:"15px"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center">
            <Button onClick={(e) => handleBack()}>Back</Button>
            &nbsp;
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
            </div>
        </div>
    )
}

export default Add;