import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { styled, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  // ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  margin: "auto",
  color: theme.palette.text.secondary,
}));
const Header = () => {
  return (
    <div className="header-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={4} className="item-wrapper">
            <Item elevation={0}>
              <div className="header-box">
                <h4>50</h4>
                <h6>Recent Work Orders</h6>
                <a>
                  <div> View More</div>
                </a>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} className="item-wrapper">
            <Item elevation={0}>
              <div className="header-box">
                <h4>50</h4>
                <h6>Recent Work Orders</h6>
                <a>
                  <div> View More</div>
                </a>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} className="item-wrapper">
            <Item elevation={0}>
              <div className="header-box no-border">
                <h4>50</h4>
                <h6>Recent Work Orders</h6>
                <a>
                  <div> View More</div>
                </a>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Header;
