import React from "react";
import '../App.css'
import { TextField } from "@mui/material";
import { Document, Page } from "react-pdf";
import ImageClick from '../components/ImageClick'


const User = () => {
  return (
  <div>
    <h1>This is the user Page</h1>
    <div>
        <TextField id="outlined-basic" variant="filled" fullWidth label='Search' />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
    <li onClick={() => ImageClick()}>hello_world </li>
  </div>
  );
};

export default User;