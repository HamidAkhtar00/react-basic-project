import React from 'react';
import { TextField, Box } from '@mui/material';
import { Field } from 'formik';

const PurchaseDetails = () => (
  <Box sx={{marginLeft:5}}>
    <Field name="purchaseDate">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Purchase Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="purchaseAmount">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Purchase Amount"
          type="number"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="paymentMethod">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Payment Method"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="deliveryDate">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Delivery Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="orderNotes">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Order Notes"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </Box>
);

export default PurchaseDetails;
