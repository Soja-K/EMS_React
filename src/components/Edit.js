import React from 'react'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';



function Edit() {

const [id,setId]=useState('')
const [uname,setUname]=useState('')
const [age,setAge]=useState('')
const [designation,setDesignation]=useState('')

const [salary,setSalary]=useState(0)


useEffect(()=>{
  setId(localStorage.getItem('id'))
  setUname(localStorage.getItem('uname'))
  
  setDesignation(localStorage.getItem('designation'))
  setAge(localStorage.getItem('age'))

   setSalary(JSON.parse(localStorage.getItem('salary')))
},[])

console.log(id);
console.log(uname);
console.log(designation)
console.log(age);
console.log(salary);

var index=Employee.map(item=>item.id).indexOf(id)
console.log(index);


let history=useNavigate()



  const handleUpdate=(e)=>{
    e.preventDefault();
    console.log(e);
  let  emp=Employee[index]
    emp.uname=uname;
    emp.age=age;
    emp.designation=designation;
    emp.salary=salary;
    console.log(emp);
    history('/')
  }






  return (
    <>
      <h1 className='text primary text-center mt-5'>Employee Management System</h1>
      <p className='text-center'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources</p><br/><br/>
      <Row>
        <Col>
          <img width={'400px'} height={'400x'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLre4-kxT_ijVZulbQZGE-XTeNiZYy3lXOCw&usqp=CAU' />
        </Col>
        <Col>
        <Form className='border border-3 p-4'>
          
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
          
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Designation</Form.Label>
      <Form.Control type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Salary</Form.Label>
      <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </Col>
      </Row>
    </>
  )
}

export default Edit