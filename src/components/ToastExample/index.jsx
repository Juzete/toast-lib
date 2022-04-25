import React, { useContext } from 'react';
import { ToastContext } from '@/contexts/ToastContext';

import { Button, Wrapper } from './components';
import {
  defaultErrorToastProperties,
  defaultInfoToastProperties,
  defaultSuccessToastProperties,
  defaultWarningToastProperties,
} from '@/presets/toastsDefaultProperties';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const ToastExample = ({ config }) => {
  const { addToast } = useContext(ToastContext);

  const buttonHandler = (type, text, config) => () => {
    addToast(type, text, config);
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button
          style={{ background: defaultSuccessToastProperties.background }}
          onClick={buttonHandler('success', 'success toast example', config)}
          data-test-id="successButton"
        >
          success toast example
        </Button>
        <Button
          style={{ background: defaultErrorToastProperties.background }}
          onClick={buttonHandler('error', 'error toast example', config)}
          data-test-id="errorButton"
        >
          error toast example
        </Button>
        <Button
          style={{ background: defaultWarningToastProperties.background }}
          onClick={buttonHandler('warning', 'warning toast example', config)}
          data-test-id="warningButton"
        >
          warning toast example
        </Button>
        <Button
          style={{ background: defaultInfoToastProperties.background }}
          onClick={buttonHandler('info', 'info toast example', config)}
          data-test-id="infoButton"
        >
          info toast example
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default ToastExample;
