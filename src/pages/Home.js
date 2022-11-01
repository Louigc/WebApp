// Kodet af Sofie, Louise og Christian

import "bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Sublist from "../components/Sublist";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <br></br>
      <Sublist></Sublist>
      <div className="row gx-0">
        <NavLink to="/create" className="fixed-btn">
          <Button className="AddButton">
            <AddIcon
              sx={{ fontSize: 80 }}
              style={{
                backgroundColor: "#12664F",
                color: "#FDF6A5",
                borderRadius: "10px",
              }}
            ></AddIcon>
          </Button>
        </NavLink>
      </div>
    </>
  );
};
