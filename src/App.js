import { useState } from "react";
import {useForm} from "react-hook-form"; 
import { Button,Form } from 'react-bootstrap';
function App() {
     const [answer,setAnswer] =useState();
const {register,handleSubmit,formState: { errors } } =useForm({defaultValues:{}});
const onSubmit=({lenth1,quantity1,lenth2,quantity2})=>{
var total=(quantity1*lenth1)+(quantity2*lenth2);
var answer=0;
var rem=total%12;
if(rem===0){
answer=total/12;
}else{
     answer=(Math.floor(total/12))+1;
}
setAnswer(`${answer} rebars are needed and ${rem===0?0:12-rem} meter will end up as wastage`);
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
