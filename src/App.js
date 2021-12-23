import { useState } from "react";
import {useForm} from "react-hook-form"; 
import { Button,Form } from 'react-bootstrap';
function App() {
     const [answer,setAnswer] =useState();
const {register,handleSubmit,formState: { errors } } =useForm({defaultValues:{}});
const onSubmit=({lenth1,quantity1,lenth2,quantity2})=>{
var smallLenth=lenth1<lenth2?lenth1:lenth2;
var typeMax=lenth1>lenth2?lenth1*quantity1:lenth2*quantity2;
var typeSmall=lenth1<lenth2?lenth1*quantity1:lenth2*quantity2;
var rm=0;
var typeOneCounter=0;
var typeTwoCounter=0;
while(typeMax>=12){

  typeMax=typeMax-12;
  typeOneCounter=typeOneCounter+1;
}

if(typeMax>0){
  rm=12-typeMax;
  typeOneCounter++;
  }
if(rm>smallLenth){
  typeSmall=typeSmall-rm;
  rm=0;
}

while(typeSmall>=12){

  typeSmall=typeSmall-12;
  typeTwoCounter=typeTwoCounter+1;
}
if(typeSmall>0){
rm=12-typeSmall;
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
