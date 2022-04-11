import { iconAssets } from '@/assets/iconAssets';

export const defaultInfoToastProperties = {
  icon: iconAssets.infoIcon,
  background: '#9A40D3',
  color: '#ffffff',
  title: 'info',
};

export const defaultWarningToastProperties = {
  icon: iconAssets.warningIcon,
  background: '#F4E048',
  color: '#000000',
  title: 'warning',
};

export const defaultErrorToastProperties = {
  icon: iconAssets.errorIcon,
  background: '#E25837',
  color: '#ffffff',
  title: 'error',
};

export const defaultSuccessToastProperties = {
  icon: iconAssets.successIcon,
  background: '#37E29A',
  color: '#ffffff',
  title: 'success',
};

export const defaultSizes = {
  iconSize: 32,
  crossIconSize: 16,
  fontSize: 20,
};

export const defaultPositions = {
  'top-left': 'top: 10px; left: 10px',
  'top-right': 'top: 10px; right: 10px',
  'top-middle': 'top: 10px; left: 40%',
  'bottom-left': 'bottom: 10px; left: 10px',
  'bottom-right': 'bottom: 10px; right: 10px',
  'bottom-middle': 'bottom: 10px; left: 40%',
};

export const defaultPortalStyles = (position) => `
position: fixed;
width: fit-content;
height: auto;
z-index: 1;
${defaultPositions[position]};`;
