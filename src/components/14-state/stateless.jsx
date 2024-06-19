import React from 'react'
import { Container, Button } from 'react-bootstrap'

const Stateless = () => {

    let classes = "bg-dark text-light";

    const setClasses = (mode) => {

        if(mode === "dark"){
            classes = "bg-dark text-light";
        }else{
            classes = "bg-light text-dark";
        }

    }


  return (
    <Container className={classes} style={{height: '100vh'}}>
        <h1>Dark Light Switcher</h1>

        <div className='d-flex gap-4 mt-4'>
        <Button onclick = {()=>setClasses("dark")}>Dark Mode</Button>
        <Button onclick = {()=>setClasses("light")}>Light Mode</Button>
        </div>
    </Container>
  )
}

export default Stateless