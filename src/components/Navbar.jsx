import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, InputLabel, Paper, TextField, } from '@mui/material';
import { useFormik, } from 'formik';
import * as Yup from 'yup';
import "yup-phone"


const initialValues = {
  Name: "",
  email: "",
  phone: "",
  checkin: "",
  checkout: "",
  rooms: "",
}
const inputValidation = Yup.object({
  Name: Yup.string().min(2).max(25).required("Enter your Name").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().email().required("Enter valid Email"),
  phone: Yup.string().phone().required("Enter your phone number"),
  checkin: Yup.string().required("Enter check-IN date"),
  checkout: Yup.string().required("Enter check-OUT date"),
  rooms: Yup.number().min(1).required("Enter Number of rooms required")
})
const Navbar = () => {

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    initialValues,
    validationSchema: inputValidation,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
  }

})
  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOTEL TROUVER
          </Typography>
          <Button color="secondary" variant='contained' sx={{ mr: 5, borderRadius: 5 }}>BOOK YOUR STAY</Button>
        </Toolbar>
      </AppBar>
      <Grid container columnSpacing={2} sx={{ flexWrap: '1', backgroundImage: `url('/img/img13.PNG')`}}>
        <Grid item lg={8} md={6} xs={12} maxHeight width={800}>
          
        </Grid>
        <Grid item lg={4} md={6} xs={12}  component="form" onSubmit={handleSubmit} noValidate >
          <Paper elevation={5} sx={{ mt: 5, mr: 2, p: 2 }}>
            
              <TextField
              margin='normal'
              autofocus
              required fullWidth
              justifyContent='center'
              name='Name'
              id="Name"
              type='text'
              label="Enter your Name"
              variant="outlined"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.Name && touched.Name ? (errors.Name) : null}
              helperText={errors.Name}
            />
            <TextField
              margin='normal'
              required fullWidth
              name='email'
              id="email"
              type='email'
              label="Enter your email ID"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email ? (errors.email) : null}
              helperText={errors.email}
            />
            <TextField
              margin='normal'
              required fullWidth
              name='phone'
              id="phone"
              type='number'
              label="Enter your phone name"
              variant="outlined"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone && touched.phone ? (errors.phone) : null}
              helperText={errors.phone}
            />
            <InputLabel size='small'>Check-IN date</InputLabel>
            <TextField
              margin='normal'
              required fullWidth
              name='checkin'
              id="checkin"
              type='date'
              variant="outlined"
              value={values.checkin}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.checkin && touched.checkin ? (errors.checkin) : null}
              helperText={errors.checkin}
            />
            <InputLabel size='small'>Check-OUT date</InputLabel>
            <TextField 
              margin='normal'
              required fullWidth
              name='checkout'
              id="checkout"
              type='date'
              variant="outlined"
              value={values.checkout}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.checkout && touched.checkout ? (errors.checkout) : null}
              helperText={errors.checkout}
            />
            <TextField  sx={{mt:2}}
              variant='outlined'
              required fullWidth
              name='rooms'
              type='number'
              label='Number of rooms required'
              value={values.rooms}
              onChange={handleChange}
              onBlur={handleBlur} 
              error={errors.rooms && touched.rooms ? (errors.rooms) : null}
              helperText={errors.rooms}
              />
            <Button type='submit' color="primary" variant='contained' sx={{ mt: 2 }}>BOOK NOW</Button>
          </Paper>
        </Grid>
      </Grid>

    </Box>
  );
}
export default Navbar
