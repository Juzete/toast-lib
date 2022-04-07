import React, { useContext } from 'react';
import { ToastContext } from '@/contexts/ToastContext';

import { Button, Wrapper } from './components';
import {
  defaultErrorToastProperties,
  defaultInfoToastProperties,
  defaultSuccessToastProperties,
  defaultWarningToastProperties,
} from '../../presets/toastsDefaultProperties';

const ToastExample = ({ config }) => {
  const { addToast } = useContext(ToastContext);
  return (
    <Wrapper>
      <Button
        style={{ background: defaultSuccessToastProperties.background }}
        onClick={() => addToast('success', 'success toast example', config)}
        data-test-id="successButton"
      >
        success toast example
      </Button>
      <Button
        style={{ background: defaultErrorToastProperties.background }}
        onClick={() => addToast('error', 'error toast example', config)}
      >
        error toast example
      </Button>
      <Button
        style={{ background: defaultWarningToastProperties.background }}
        onClick={() => addToast('warning', 'warning toast example', config)}
      >
        warning toast example
      </Button>
      <Button
        style={{ background: defaultInfoToastProperties.background }}
        onClick={() => addToast('info', 'info toast example', config)}
      >
        create info toast example
      </Button>
    </Wrapper>
  );
};

export default ToastExample;
