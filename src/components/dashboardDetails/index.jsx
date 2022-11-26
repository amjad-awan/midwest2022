import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { styled, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  textAlign: "center",
  margin: "auto",
  color: theme.palette.text.secondary,
}));
const DashboardDetails = () => {
  return (
    <div className="dashboard-details-wrapper">
      <div className="label-bar">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={4}>
              <Item elevation={0}>
                <div className="item-wrapper">
                  <p className="label">Line #</p>
                  <p className="label">work order</p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item elevation={0}>
                <div className="item-wrapper">
                  <p className="label">purchase order</p>
                  <p className="label">driver</p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item elevation={0}>
                <div className="item-wrapper">
                  <p className="label">customer</p>
                  <p className="label">driver</p>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="detail-column">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={4}>
              <Item elevation={0}>
                <div className="item-wrapper">
                  <div>
                    <p>1234</p>
                    <p>1234</p>
                    <p>1234</p>
                    <p>1234</p>
                  </div>
                  <div>
                    <p>w000345</p>
                    <p>w000345</p>
                    <p>w000345</p>
                    <p>w000345</p>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item elevation={0}>
                <div className="item-wrapper">
                  <div>
                    <p>1234</p>
                    <p>1234</p>
                    <p>1234</p>
                    <p>1234</p>
                  </div>
                  <div>
                    <p>john doe</p>
																				<p>john doe</p>


                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item elevation={0}>
                <div className="item-wrapper">
                  <div>
                    <p>1234</p>
																				<p>1234</p>
																				<p>1234</p>
																				<p>1234</p>



                  </div>
                  <div>
                    <p>1234</p>
																				<p>1234</p>
                    <p>1234</p>

                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default DashboardDetails;
