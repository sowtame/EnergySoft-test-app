import React, { useCallback } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

interface ICustomScrollbars {
  onScroll?: (event: React.UIEvent) => void;
  forwardedRef: any;
  style: React.CSSProperties;
  children: React.ReactNode;
}

const CustomScrollbars = ({ onScroll, forwardedRef, style, children }: ICustomScrollbars) => {
  const refSetter = useCallback(
    (scrollbarsRef: any) => {
      if (scrollbarsRef) {
        forwardedRef(scrollbarsRef.view);
      } else {
        forwardedRef(null);
      }
    },
    [forwardedRef],
  );

  return (
    <Scrollbars ref={refSetter} style={{ ...style, overflow: 'hidden' }} onScroll={onScroll}>
      {children}
    </Scrollbars>
  );
};

export const CustomScrollbarsVirtualList = React.forwardRef<any, ICustomScrollbars>((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
));
