import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Forminput } from "./Components/Forminput";
import { According } from "./Components/According";
import { Data } from "./data/Data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = (message,type) =>{
    if(type=="errore"){
      toast.error(message)
    }
    else if(type="Success"){
      toast.success(message)
    }
  };
  const [data, setdata] = useState(Data);
  const ADD = () => {
    localStorage.setItem("item", JSON.stringify([...Data]));
    setdata([...Data]);
    notify("Addition is succed","Success")
  };
  const clearall = () => {
    localStorage.removeItem("item");
    Data.splice(0, Data.length);
    setdata([...Data]);
    notify("Cleaal is succed","Success")

  };
  const clearone = (item) => {
    localStorage.setItem("item", JSON.stringify([...item]));
    setdata([...item]);
    if (Data.length <= 0) {
      localStorage.removeItem("item");
    }
    notify("Cleaal is succed","Success")

  };
  return (
    <div className="p-5 text-center ">
      <Container>
        <Row>
          <Col sm="4">
            <h5>Question and Responses</h5>
          </Col>
          <Col sm="8">
            <Forminput notify={notify} onadd={ADD} />
            <According data={Data} clearoneitems={clearone} />
            {localStorage.getItem("item") != null ? (
              <Button onClick={clearall} className="my-3 btn btn-primary w-100">
                Clear All
              </Button>
            ) : null}
          </Col>
          <ToastContainer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
