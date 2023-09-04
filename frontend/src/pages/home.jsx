import React from "react";
import '../App.css'
import Container from "@mui/material/Container"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return(
    <div>
      <h1>test</h1>
      <div style={{display:"flex", justifyContent:"space-around"}} className='row'>
        <Container fixed>
        </Container>
        <Container fixed>
          <div style={{backgroundColor:"purple", height:"20rem"}} className='column'>user
            <div>
            <Container>
              <button onClick={() => navigate('/user')}/>
            </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;