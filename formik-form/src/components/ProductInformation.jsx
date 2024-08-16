import React from 'react';
import { TextField, Box } from '@mui/material';
import { Field } from 'formik';

const ProductInformation = () => (
  <Box sx={{marginLeft:5}}>
    <Field name="productName">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Product Name"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="productDescription">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Product Description"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="productPrice">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Product Price"
          type="number"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="productCategory">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Product Category"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
    <Field name="productStock">
      {({ field, meta }) => (
        <TextField
          {...field}
          label="Product Stock"
          type="number"
          fullWidth
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  </Box>
);

export default ProductInformation;
