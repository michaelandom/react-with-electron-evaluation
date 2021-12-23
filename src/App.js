import { useState } from "react";
import {useForm} from "react-hook-form"; 
import { Button,Form } from 'react-bootstrap';
function App() {
     const [answer,setAnswer] =useState();
const {register,handleSubmit,formState: { errors } } =useForm({defaultValues:{}});
const onSubmit=({lenth1,quantity1,lenth2,quantity2})=>{
var smallLenth=0;
var largeLenth=0;
var typeMax=0;
var typeSmall=0;
if(lenth1>lenth2){
  typeMax=lenth1*quantity1;
  typeSmall=lenth2*quantity2;
  smallLenth=lenth2;
  largeLenth=lenth1;
}else{

  typeMax=lenth2*quantity2;
  typeSmall=lenth1*quantity1;
  smallLenth=lenth1;
  largeLenth=lenth2;
}
var rm=0;
var typeOneCounter=0;
var typeTwoCounter=0;
while(typeMax>=12){

  if(12%largeLenth!==0){
    typeMax=typeMax-largeLenth;
    rm=rm+(12%largeLenth);
    if(12%largeLenth>smallLenth && typeSmall>0){
      var large=12%largeLenth;
      while(large>smallLenth && rm>smallLenth){
        typeSmall=typeSmall-smallLenth;
        large=large-smallLenth;
          rm=rm-smallLenth;
      }
      
    }
  }else{
    typeMax=typeMax-12;
  }
  

  typeOneCounter=typeOneCounter+1;
}

if(typeMax>0){
  if(rm!==0){
    rm=rm+(12-typeMax);
    if(12%largeLenth>smallLenth && typeSmall>0){
       large=12%largeLenth;
      while(large>smallLenth && rm>smallLenth){
        typeSmall=typeSmall-smallLenth;
        large=large-smallLenth;
          rm=rm-smallLenth;
      }
      
    }
  }else{
   rm=(12-typeMax);

   if(rm>smallLenth && typeSmall>0){
       large=rm;
      while(large>smallLenth){
        typeSmall=typeSmall-smallLenth;
        large=large-smallLenth;
          rm=rm-smallLenth;
      }
      
    }
  }
  
  typeOneCounter++;
  }

while(typeSmall>=12){

  
  if(12%smallLenth!==0){
  typeSmall=typeSmall-smallLenth;
    rm=rm+(12%smallLenth);
  }else{
    typeSmall=typeSmall-12;

  }
  typeTwoCounter=typeTwoCounter+1;
}

if(typeSmall>0){
rm=rm+(12-typeSmall);
  typeTwoCounter++;
}
setAnswer(`${typeOneCounter+typeTwoCounter} rebars are needed and ${rm} meter will end up as wastage`);
}
return (
     <div className="w-75 m-auto  p-3 shadow-lg">
          <h3 className="text-primary ">Bar calculator</h3>
     <Form onSubmit={handleSubmit(onSubmit)}>
<Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>length 1</Form.Label>
    <Form.Control type="number" placeholder="Enter length 1"{...register("lenth1",{ required: true })} onChange={()=>setAnswer()} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>quantity 1</Form.Label>
    <Form.Control type="number" placeholder="Enter quantity 1"{...register("quantity1",{ required: true })} onChange={()=>setAnswer()} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>length 2</Form.Label>
    <Form.Control type="number" placeholder="Enter length 2"{...register("lenth2",{ required: true })} onChange={()=>setAnswer()} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>quantity 2</Form.Label>
    <Form.Control type="number" placeholder="Enter quantity 2"{...register("quantity2",{ required: true })} onChange={()=>setAnswer()} />
  </Form.Group>
   <br/>
     <Button type="submit" variant="primary w-100">calculate</Button>
     <br/>
     <br/>
     <br/>
     {(errors.lenth1||errors.lenth2||errors.quantity1||errors.quantity2) && <span className="text-danger shadow-lg p-2">This field is required</span>}
     {answer && <span className="text-success  p-2">{answer}</span>}
          </Form>
          </div>
  );
}

export default App;
