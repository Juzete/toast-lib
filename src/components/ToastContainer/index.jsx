import { ToastProvider } from '@/contexts/ToastContext';
import { GlobalStyle } from '@/globalStyle';

export default ToastContainer = ({ maxCount, position, ...props }) => {
  return (
    <ToastProvider position={position} maxCount={maxCount}>
      <GlobalStyle />
      {props.children}
    </ToastProvider>
  );
};
