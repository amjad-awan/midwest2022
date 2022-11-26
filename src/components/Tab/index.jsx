import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import "@fontsource/public-sans";
// import { withStyles} from '@material-ui/core/styles';

import "./style.scss";

const TopTab = (props) => {
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState(null);
  const [age, setAge] = React.useState("");

  function TabPanel(props) {
    // Tabs content
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };

  // Gird content
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    typography: {
      fontFamily: ["Source Code Pro", "monospace"].join(","),
    },
    textAlign: "center",
    color: theme.palette.text.secondary,
    root: {
      "&.MuiTabPanel-root": {
        padding: "0px",
        backgroundColor: "red",
      },
    },
  }));
  return (
    <div>
      <Box
        className="tab-wrapper"
        sx={{
          boxShadow: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          textColor="#586e75"
          indicatorColor="#586e75"
          TabIndicatorProps={{
            style: {
              background: "#586e75",
              color: "red",
              height: "2px",
              borderRadius: "5px",
            },
          }}
        >
          <Tab
            label="Order setup"
            {...a11yProps(0)}
            className="tab-link"
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
          <Tab
            label="Trip details"
            className="tab-link"
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
          <Tab
            label="driver activity"
            {...a11yProps(1)}
            className="tab-link"
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
          <Tab
            label="Landfill Details"
            className="tab-link"
            {...a11yProps(2)}
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
          <Tab
            label="Line Details"
            className="tab-link"
            {...a11yProps(3)}
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
          <Tab
            label="Order Notes"
            className="tab-link"
            {...a11yProps(4)}
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
          <Tab
            label="Item Seven"
            className="tab-link"
            {...a11yProps(5)}
            sx={{
              minWidth: "fit-content",
              flex: 1,
              height: "60px",
              fontSize: "15px",
            }}
          />
        </Tabs>
      </Box>
      {
        //////////////////// first tab
      }
      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1, padding: 0, m: 0 }}>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Order ID"
                    className="form-input-field"
                    inputProps={{ style: { fontSize: 15 } }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sty={{ padding: 0 }}
                  >
                    <DatePicker
                      label="Order Date"
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="PO Number"
                    className="form-input-field"
                    inputProps={{ style: { fontSize: 15 } }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ margin: 0 }}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ fontSize: "15px" }}
                    >
                      Customer ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Driver ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Vehicle ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Container ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Origin ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Destination ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Destination ID
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={4}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ textAlign: "left" }}
                    >
                      Order Type
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Day Run"
                        control={<Radio />}
                        label="Day Run"
                      />
                      <FormControlLabel
                        value="Over Road"
                        control={<Radio />}
                        label="Over Road"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <div className="button-wrapper">
            <button className="btn">save</button>
            <button className="btn">exit</button>
            <button className="btn">recall</button>
            <button className="btn">search</button>
            <button className="btn">delete</button>
          </div>
        </Box>
      </TabPanel>

      {
        //////////////// Second Tab
      }
      <TabPanel value={value} index={1}>
        <Typography className="trip-details-heading">Trip details</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sty={{ padding: 0 }}
                  >
                    <DatePicker
                      label="Pickup Date"
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Pickup Time "
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Starting Mileage"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Starting Mileage"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total Miles"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Capacity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Return Location
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sty={{ padding: 0 }}
                  >
                    <DatePicker
                      label="Drop Date"
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Drop Time"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total Miles"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Typography className="trip-details-heading">
            Trip Qualifications
          </Typography>
          <Grid container>
            <Grid item md={4}>
              <Item elevation={0} sx={{ textAlign: "left" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <p className="texterea-label">Pre-Trip Qualifications</p>

                  <textarea className="text-area"></textarea>
                </Box>
              </Item>
            </Grid>
            <Grid item md={4}>
              <Item elevation={0} sx={{ textAlign: "left" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <p className="texterea-label">Post-Trip Qualifications</p>
                  <textarea className="text-area" placeholder=""></textarea>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <div className="button-wrapper">
            <button className="btn">save</button>
            <button className="btn">exit</button>
            <button className="btn">recall</button>
            <button className="btn">search</button>
            <button className="btn">delete</button>
          </div>
        </Box>
      </TabPanel>

      {
        /////// Third Tab
      }
      <TabPanel value={value} index={2}>
        <div className="tab-flex">
          <Box
            sx={{
              flexGrow: 1,
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Capacity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Customer ID"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      size="small"
                      type="text"
                      id="demo-helper-text-misaligned"
                      label="Description"
                      className="form-input-field"
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <DatePicker
                        label="Activity Date"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <TimePicker
                        label="Activity time"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item sm={12} md={12}>
                <Item elevation={0} sx={{ textAlign: "left" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <p className="texterea-label">
                      Explanation (If needed for clarity)
                    </p>
                    <textarea className="text-area" placeholder=""></textarea>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Capacity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Customer ID"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      size="small"
                      type="text"
                      id="demo-helper-text-misaligned"
                      label="Description"
                      className="form-input-field"
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <DatePicker
                        label="Activity Date"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <TimePicker
                        label="Activity time"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item sm={12} md={12}>
                <Item elevation={0} sx={{ textAlign: "left" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <p className="texterea-label">
                      Explanation (If needed for clarity)
                    </p>
                    <textarea className="text-area" placeholder=""></textarea>
                    <div className="button-wrapper">
                      <button className="btn">save</button>
                      <button className="btn">exit</button>
                      <button className="btn">recall</button>
                      <button className="btn">search</button>
                      <button className="btn">delete</button>
                    </div>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Capacity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Customer ID"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      size="small"
                      type="text"
                      id="demo-helper-text-misaligned"
                      label="Description"
                      className="form-input-field"
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <DatePicker
                        label="Activity Date"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <TimePicker
                        label="Activity time"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item sm={12} md={12}>
                <Item elevation={0} sx={{ textAlign: "left" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <p className="texterea-label">
                      Explanation (If needed for clarity)
                    </p>
                    <textarea className="text-area" placeholder=""></textarea>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">
                        Capacity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Customer ID"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <TextField
                      size="small"
                      type="text"
                      id="demo-helper-text-misaligned"
                      label="Description"
                      className="form-input-field"
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <DatePicker
                        label="Activity Date"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Item elevation={0}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      sty={{ padding: 0 }}
                    >
                      <TimePicker
                        label="Activity time"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            sx={{
                              width: "100%",
                            }}
                            inputProps={{ style: { fontSize: 15 } }}
                            InputLabelProps={{ style: { fontSize: 15 } }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Item>
              </Grid>
              <Grid item sm={12} md={12}>
                <Item elevation={0} sx={{ textAlign: "left" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      "& > :not(style)": { m: 1 },
                    }}
                  >
                    <p className="texterea-label">
                      Explanation (If needed for clarity)
                    </p>
                    <textarea className="text-area" placeholder=""></textarea>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </TabPanel>

      {
        ////////// Fourth Tab
      }
      <TabPanel value={value} index={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} md={6} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sty={{ padding: 0 }}
                  >
                    <DatePicker
                      label="Ticket Date"
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Unit Of Measure
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Item elevation={0}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Measurement"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Cobmeal"
                    className="form-input-field"
                    sx={{ width: "50%" }}
                    // style={{ width: "20px", padding:0 }}
                  />
                  <FormGroup>
                    <FormControlLabel
                      style={{ width: "60px" }}
                      control={<Checkbox defaultChecked />}
                      label="Deliver W/Liner"
                    />
                  </FormGroup>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <div  style={{ width: "100%", padding:"0px 10px"}}>
                  <p className="texterea-label" style={{paddingBottom:"10px"}}>
                    Explanation (If needed for clarity)
                  </p>
                  <textarea
                    className="text-area"
                    style={{ width: "100%"}}
                    placeholder=""
                  ></textarea>
                  </div>
                
                </Box>
              </Item>
            </Grid>
          </Grid>
          <div className="button-wrapper">
          <button className="btn">save</button>
          <button className="btn">exit</button>
          <button className="btn">recall</button>
          <button className="btn">search</button>
          <button className="btn">delete</button>
          </div>
        </Box>
      </TabPanel>

      {
        ////////// Fifth Tab
      }
      <TabPanel value={value} index={4}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Item#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="text"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Qty"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Charge"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Item#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="text"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Qty"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Charge"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Item#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="text"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Qty"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Charge"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Item#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="text"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Qty"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Charge"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Item#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="text"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Qty"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Charge"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">Item#</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Customer ID"
                      onChange={handleChange}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="text"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Qty"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Charge"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    id="demo-helper-text-misaligned"
                    label="Total"
                    className="form-input-field"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
          <div className="button-wrapper">
          <button className="btn">save</button>
          <button className="btn">exit</button>
          <button className="btn">recall</button>
          <button className="btn">search</button>
          <button className="btn">delete</button>
          </div>
        </Box>
      </TabPanel>
      {
        ////////// Sixth Tab
      }
      <TabPanel value={value} index={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} md={12} lg={6}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "0px 20px",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                 
                  <p className="texterea-label" >Administrative Notes</p>
        
                  <textarea
                    className="text-area"
                    style={{ width: "100%" }}
                    placeholder=""
                  ></textarea>
              
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "0px 20px",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <p className="texterea-label">Driver Notes</p>
                  <textarea
                    className="text-area"
                    style={{ width: "100%" }}
                    placeholder=""
                  ></textarea>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "0px 20px",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <p className="texterea-label">Client Notes</p>
                  <textarea
                    className="text-area"
                    style={{ width: "100%" }}
                    placeholder=""
                  ></textarea>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Item elevation={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "0px 20px",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <p className="texterea-label">General Notes</p>
                  <textarea
                    className="text-area"
                    style={{ width: "100%" }}
                    placeholder=""
                  ></textarea>
         
                </Box>
              </Item>
            </Grid>
            <div className="button-wrapper">
          <button className="btn " style={{marginLeft:"12px"}}>save</button>
          <button className="btn">exit</button>
          <button className="btn">recall</button>
          <button className="btn">search</button>
          <button className="btn">delete</button>
          </div>
          </Grid>
        
        </Box>
      </TabPanel>
    </div>
  );
};
export default TopTab;
