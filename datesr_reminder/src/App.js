
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DateAction from "./components/DatesAction";
import Datescounts from "./components/DatesCounts";
import DatesList from "./components/DatesList";
import { person } from "./data";

function App() {
const [personData, setPersonData] = useState(person)
const onDelete = ()=>{ 
 setPersonData([])
}
const onViewData = ()=>{ 
  setPersonData(person)
 }
 useEffect(()=>{
  setPersonData([])
 },[]
 )
  
  return (
    <div className="color-body">
      <Container className="py-5">
    <Datescounts person = {personData} />
    <DatesList person = {personData} />
    <DateAction deleteData={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
