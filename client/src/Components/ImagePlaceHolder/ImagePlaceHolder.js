import React from 'react';
import {Skeleton } from '@mui/material';

// material-ui
import Skeleton from '@material-ui/core/Skeleton';

const ImagePlaceHolder = ({ ...others }) => <Skeleton variant="rect" {...others} animation="wave" />;

export default ImagePlaceHolder;
