import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
   
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0002/assets/aac48369-b009-4b8b-ad11-b402928bb756.png?format=avif',
  },
  {
   
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/2ee2ac34-c52c-465c-90eb-1a75f6820ac4.png?format=avif',
  },
  {
   
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/fc1126f5-5186-47a3-b207-69f57dfa6b2f.png?format=avif',
  },
  {
   
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/5a0e2a09-32fe-49ce-8cd6-1082c3571856.png?format=avif',
  },
  {
   
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif?format=avif',
  },{
   
    imgPath:
      'https://f.nooncdn.com/mpcms/EN0001/assets/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif?format=avif',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 900, flexGrow: 1 }} style={{padding: 0,margin: 0}}>
     
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                    padding : 0,
                    margin: 0,
                  height: 190,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
        
      </AutoPlaySwipeableViews>
    
    </Box>
  );
}

export default SwipeableTextMobileStepper;
