import React, {useState, useEffect} from "react";
import  {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employee";
import { useNavigate} from "react-router-dom";

function Edit() {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e) {
        return e.id;
       }).indexOf(id)

    const handleEdit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Age = age;
        a.Name = name;

        history('/');
    }

    const handleBack = () => {
        history('/')
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('id'))
    }, [])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15px"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center">
            <Button onClick={(e) => handleBack()}>Back</Button>
            &nbsp;
            <Button onClick={(e) => handleEdit(e)}>Update</Button>
            </div>
        </div>
    )
}

export default Edit;