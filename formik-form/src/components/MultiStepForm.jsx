import React, { useState, useEffect } from 'react';
import {
  Stepper, Step, StepLabel, Button, Box, Skeleton, Typography, Snackbar
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ProductInformation from './ProductInformation';
import CustomerInformation from './CustomerInformation';
import PurchaseDetails from './PurchaseDetails';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  { label: 'Product Information', icon: <StoreIcon /> },
  { label: 'Customer Information', icon: <PersonIcon /> },
  { label: 'Purchase Details', icon: <ShoppingCartIcon /> },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [successOpen, setSuccessOpen] = useState(false);
  const [stepColors, setStepColors] = useState(steps.map(() => '#000'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5-second skeleton loading on app start

    return () => clearTimeout(timer);
  }, []);

  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setStepColors((colors) => colors.map((color, index) =>
      index === activeStep ? '#4caf50' : color
    ));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      setSuccessOpen(true);
      actions.setSubmitting(false);
      setActiveStep(0);
    } else {
      handleNext();
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const validationSchema = [
    Yup.object({
      productName: Yup.string().required('Product Name is required'),
      productDescription: Yup.string().required('Product Description is required'),
      productPrice: Yup.number().required('Product Price is required').positive('Must be a positive number'),
      productCategory: Yup.string().required('Product Category is required'),
      productStock: Yup.number().required('Product Stock is required').min(1, 'Stock must be at least 1'),
    }),
    Yup.object({
      customerName: Yup.string().required('Customer Name is required'),
      customerEmail: Yup.string().email('Invalid email').required('Email is required'),
      customerPhone: Yup.string().required('Phone number is required'),
      customerAddress: Yup.string().required('Address is required'),
      customerCity: Yup.string().required('City is required'),
    }),
    Yup.object({
      purchaseDate: Yup.date().required('Purchase Date is required'),
      purchaseAmount: Yup.number().required('Purchase Amount is required'),
      paymentMethod: Yup.string().required('Payment Method is required'),
      deliveryDate: Yup.date().required('Delivery Date is required'),
      orderNotes: Yup.string(),
    }),
  ];

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      {loading ? (
        <Box >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Skeleton variant="rectangular" width="30%" height={50} />
            <Skeleton variant="rectangular" width="30%" height={50} />
            <Skeleton variant="rectangular" width="30%" height={50} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Skeleton variant="rectangular" width="45%" height={50} />
            <Skeleton variant="rectangular" width="45%" height={50} />
          </Box>
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
          ))}
        </Box>
      ) : (
        <>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{ borderBottom: '2px solid #ccc', mb: 2 }}
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel
                  icon={React.cloneElement(step.icon, { sx: { color: stepColors[index] } })}
                  sx={{ color: stepColors[index] }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Formik
            initialValues={{
              productName: '',
              productDescription: '',
              productPrice: '',
              productCategory: '',
              productStock: '',
              customerName: '',
              customerEmail: '',
              customerPhone: '',
              customerAddress: '',
              customerCity: '',
              purchaseDate: '',
              purchaseAmount: '',
              paymentMethod: '',
              deliveryDate: '',
              orderNotes: '',
            }}
            validationSchema={validationSchema[activeStep]}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {activeStep === 0 && <ProductInformation />}
                {activeStep === 1 && <CustomerInformation />}
                {activeStep === 2 && <PurchaseDetails />}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  {activeStep > 0 && (
                    <Button
                      onClick={handleBack}
                      variant="contained"
                      startIcon={<ArrowBackIcon />}
                      sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } ,marginLeft : 5}}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                  
                    type="submit"
                    variant="contained"
                    endIcon={isLastStep ? <CheckCircleIcon /> : <NavigateNextIcon />}
                    disabled={isSubmitting}
                    sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, marginLeft : 5 }}
                  >
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Snackbar
            open={successOpen}
            autoHideDuration={6000}
            onClose={() => setSuccessOpen(false)}
            message="Form submitted successfully!"
            sx={{ backgroundColor: '#4caf50', color: '#fff' }}
          />
        </>
      )}
    </Box>
  );
};

export default MultiStepForm;
