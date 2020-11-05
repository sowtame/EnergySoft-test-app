import React, { useCallback } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars = ({ onScroll, forwardedRef, style, children }: any) => {
  const refSetter = useCallback((scrollbarsRef) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view);
    } else {
      forwardedRef(null);
    }
  }, []);

  return (
    <Scrollbars className='acticles_list' ref={refSetter} style={{ ...style, overflow: 'hidden' }} onScroll={onScroll}>
      {children}
    </Scrollbars>
  );
};

export const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
));
