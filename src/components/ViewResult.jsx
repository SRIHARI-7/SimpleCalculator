import React from 'react';
import Card from 'react-bootstrap/Card';


function ViewResult(props) {
    function getValue(event){
        console.log(props.val);
    }
    
  return (
    <div  onClick={getValue}>
        <Card bg="secondary">
            <Card.Body>
                <h2>{props.val}</h2>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ViewResult