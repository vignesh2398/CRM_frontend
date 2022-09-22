import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Homepage = () => {
 

  const navigate = useNavigate();

  return (
    <section className="wrapper" style={{ borderTop: "3px solid #1d8cf8" }}>
      <div className="row p-4">
        <div className="col-md-6">
          <h1
            style={{
              fontSize:"3rem",
              textTransform: "uppercase",
              textAlign: "justify",
              fontWeight: 700,
              textShadow: "-0.04em 0.04em #0f3460, -0.06em 0.06em #fd5d93",
              color: "#ff",
            }}
          >
            Easy CRM for Your Basic CRM needs
          </h1>
          <p className="text-danger lead title">*It's in development</p>
        </div>
        
        <div className="col-md-6">
          
          <div>
            <Button variant="contained" onClick={() => navigate("/admin")}>
              Login as admin
            </Button>
         
            
            <Button variant="container mx-2" onClick={() => navigate("/manager")}>
              Login as manager
            </Button>
          
            <Button variant="container" onClick={() => navigate("/EmployeeLogin")}>
              Login as employee
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Homepage;
