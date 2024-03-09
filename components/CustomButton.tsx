import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const CustomButton = ({
  smWidth,
  mdWidth,
  lgWidth,
  loading,
  loadingText,
  bgPrimary,
  bgSecondary,
  fontSize,
  disabled,
  p,
  mb,
  mt,
  mr,
  ml,
  height,
  sx, // Destructure the sx prop from the incoming props
  ...props
}: any) => {
  // Merge custom sx props with default styles
  const mergedSx = {
    width: {
      xs: smWidth || '100%',
      sm: smWidth || '100%',
      md: mdWidth || '100%',
      lg: lgWidth || 'auto',
      xl: lgWidth || 'auto',
    },
    px: 4,
    mb,
    mt,
    mr,
    ml,
    fontSize: fontSize || '0.9rem',
    ...sx,
  };

  return (
    <Button
      disabled={disabled}
      sx={mergedSx}
      style={{
        height: height || '2.5rem',
        backgroundColor: bgPrimary
          ? '#174E64'
          : bgSecondary
          ? '#71F79F'
          : '#fff',
        color: bgPrimary ? '#71F79F' : bgSecondary ? '#174E64' : '#fff',
        borderRadius: '8px',
        padding: p,
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        fontWeight: '600',
      }}
      {...props}
    >
      {loading ? (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faCircleNotch} spin />
          <span style={{ marginLeft: '0.5rem' }}>{loadingText}</span>
        </span>
      ) : (
        props.children
      )}
    </Button>
  );
};

export default CustomButton;
