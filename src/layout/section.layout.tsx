import React, { FC, useRef } from 'react';
import { BoxElement } from 'react-blessed';

interface SectionProps {
  title?: string,
  description?: string,
}

export const SectionLayout: FC<SectionProps> = ({ title, description, children }) => {
  const sectionBoxRef = useRef<BoxElement>(null);

  const closeSection = (key: any) => {
    if (key === 'enter') {
      sectionBoxRef.current?.destroy();
    }
  }

  return (
    <box
      top='center'
      left='center'
      width='60%'
      height='60%'
      border={{ type: 'line' }}
      style={{ bg: 'green', border: { fg: 'green' }}}
      ref={sectionBoxRef}
    >
      <button
        left='2%'
        mouse
        keys
        shrink
        onKeypress={closeSection}
        style={
          {
            fg: 'green',
            hover: {
              fg: 'cyan'
            },
            focus: {
              fg: 'blue'
            }
          }
        }
      >
        x
      </button>
      <line orientation='horizontal' top='5%'></line>
      <box
        label='Project'
        top='8%'
        left='left'
        width='60%'
        border={{ type: 'line' }}
      >
        {children}
      </box>
      <text
        label='Name'
        top='8%'
        left='60%'
        width='38%'
        height='12%'
        border={{ type: 'line' }}
      >
        {title}
      </text>
      <text
        label='Info'
        top='19%'
        left='60%'
        width='38%'
        height='76%'
        padding={{
          top: 1,
          left: 1,
          right: 1,
          bottom: 1
        }}
        border={{ type: 'line' }}
      >
        {description}
      </text>
    </box>
  );
};
