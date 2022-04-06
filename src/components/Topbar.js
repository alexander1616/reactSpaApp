import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

 function Topbar() {
    return (
      <div className="App">

        <Navbar bg="light" expand="lg">
          

                <h1>My To Do List</h1>
              <Button variant="primary">Log In</Button>
              <Button variant="secondary">Sign Up</Button>
         
        </Navbar>
      </div>
    );
  }

  export default Topbar