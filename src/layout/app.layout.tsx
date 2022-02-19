import React, { FC } from 'react';

export interface AppLayoutProps {
  label: string;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const AppLayout: FC<AppLayoutProps> = ({
  label,
  top,
  right,
  bottom,
  left,
  children
}) => (
  <box
    top='center'
    left='center'
    width='80%'
    height='80%'
    border={{ type: 'line' }}
    padding={{
      top,
      right,
      bottom,
      left
    }}
    style={{ border: { fg: 'blue' } }}
    label={label}
  >
    {children}
  </box>
);
