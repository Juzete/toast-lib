import {
  defaultErrorToastProperties,
  defaultInfoToastProperties,
  defaultSuccessToastProperties,
  defaultWarningToastProperties,
} from '../presets/toastsDefaultProperties';

export const getToastPropertiesByType = (type) => {
  switch (type) {
    case 'info':
      return [
        defaultInfoToastProperties.icon,
        defaultInfoToastProperties.background,
        defaultInfoToastProperties.color,
        defaultInfoToastProperties.title,
      ];
    case 'warning':
      return [
        defaultWarningToastProperties.icon,
        defaultWarningToastProperties.background,
        defaultWarningToastProperties.color,
        defaultWarningToastProperties.title,
      ];
    case 'error':
      return [
        defaultErrorToastProperties.icon,
        defaultErrorToastProperties.background,
        defaultErrorToastProperties.color,
        defaultErrorToastProperties.title,
      ];
    case 'success':
      return [
        defaultSuccessToastProperties.icon,
        defaultSuccessToastProperties.background,
        defaultSuccessToastProperties.color,
        defaultSuccessToastProperties.title,
      ];
    default:
      return;
  }
};
