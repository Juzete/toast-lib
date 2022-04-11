import { useState, useEffect } from 'react';
import { defaultPortalStyles } from '@/presets/toastsDefaultProperties';

const createPortalContainer = (position) => {
  if (!document.getElementById('portal')) {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    portal.style = defaultPortalStyles(position);
    document.getElementById('root').after(portal);
    return true;
  }
  return false;
};

const removePortalContainer = () => {
  const portal = document.getElementById('portal');
  if (portal) {
    portal.remove();
  }
};

const usePortal = (position) => {
  const [portal, setPortal] = useState(() => createPortalContainer(position));

  useEffect(() => {
    setPortal(() => createPortalContainer(position));
    return removePortalContainer;
  }, [position]);
};

export default usePortal;
