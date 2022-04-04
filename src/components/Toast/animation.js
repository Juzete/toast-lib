import { keyframes } from 'styled-components';

const sidePush = {
  'top-left': keyframes`
    0% { transform: translateX(-100%); }
    100% {transform:translateX(0%); }
    `,
  'bottom-left': keyframes`
    0% { transform: translateX(-100%); }
    100% {transform:translateX(0%); }
    `,
  'top-middle': keyframes`
    0% { transform: translateY(-110%); }
    100% {transform:translateX(0%); }
    `,
  'bottom-middle': keyframes`
    0% { transform: translateY(100vh); }
    100% {transform:translateY(0%); }
    `,
  'top-right': keyframes`
    0% { transform: translateX(100%); }
    100% {transform:translateX(0%); }
    `,
  'bottom-right': keyframes`
    0% { transform: translateX(100%); }
    100% {transform:translateX(0%); }
    `,
};
const sidePushRemove = {
  'top-left': keyframes`
    0% { transform: translateX(0%); }
    100% {transform:translateX(-110%); }
    `,
  'bottom-left': keyframes`
    0% { transform: translateX(0%); }
    100% {transform:translateX(-110%); }
    `,
  'top-middle': keyframes`
    0% { transform: translateY(0%); }
    100% {transform:translateY(-100vh); }
    `,
  'bottom-middle': keyframes`
    0% { transform: translateY(0%); }
    100% {transform:translateY(100vh); }
    `,
  'top-right': keyframes`
    0% { transform: translateX(0%); }
    100% {transform:translateX(110%); }
    `,
  'bottom-right': keyframes`
    0% { transform: translateX(0%); }
    100% {transform:translateX(110%); }
    `,
};

const transparency = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;
const transparencyRemove = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;

const animation = (name, position) => {
  switch (name) {
    case 'side-push':
      return sidePush[position];
    case 'side-push-remove':
      return sidePushRemove[position];
    case 'transparency':
      return transparency;
    case 'transparency-remove':
      return transparencyRemove;
    default:
      return sidePush[position];
  }
};

export default animation;
