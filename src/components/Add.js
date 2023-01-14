import React from 'react'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';



function Add() {
  const [id,setId]=useState('')
const [uname,setUname]=useState('')
const [age,setAge]=useState('')
const [designation,setDesignation]=useState('')
const [salary,setSalary]=useState(0)



let history=useNavigate()


const handleAdd=(e)=>{
  e.preventDefault()
  let ids=uuid()
  console.log(ids);
  let uniqueId=ids.slice(0,8)
  console.log(uniqueId);
  Employee.push({
  id:uniqueId,
  uname:uname,
  age:age,
  designation:designation,
  salary:salary
})

history('/')
}
  return (
    <>
    <h1 className='text primary text-center mt-5'>Add Management System</h1>
    <p className='text-center'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources</p><br/><br/>
    <Row>
      <Col>
        <img width={'400px'} height={'400x'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLre4-kxT_ijVZulbQZGE-XTeNiZYy3lXOCw&usqp=CAU' />
      </Col>
      <Col>
      <Form className='border border-3 p-4'>
        
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>User name</Form.Label>
      <Form.Control type="text" 
       onChange={(e)=>setUname(e.target.value)}
      />
        
    </Form.Group>

    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" 
     onChange={(e)=>setAge(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Designation</Form.Label>
    <Form.Control type="text" 
     onChange={(e)=>setDesignation(e.target.value)}
    />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Salary</Form.Label>
    <Form.Control type="text" 
    onChange={(e)=>setSalary(e.target.value)}
    />
    </Form.Group>
    <Button 
    onClick={(e)=>handleAdd(e)} 
    variant="primary" type="submit">
      Add
    </Button>
  </Form>
      </Col>
    </Row>
  </>
  )
}

export default Add