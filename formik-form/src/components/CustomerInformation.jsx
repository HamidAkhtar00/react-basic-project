import React from 'react';
import { TextField, Box } from '@mui/material';
import { Field } from 'formik';

const CustomerInformation = () => (
  <Box sx={{marginLeft:5}}>
    <Field name="customerName">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Customer Name"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="customerEmail">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Customer Email"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="customerPhone">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Customer Phone"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="customerAddress">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Customer Address"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="customerCity">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Customer City"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </Box>
);

export default CustomerInformation;
