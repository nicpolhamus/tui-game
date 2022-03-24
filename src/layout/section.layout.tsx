import React, { FC, useEffect, useRef, useState } from 'react';
import { ButtonElement } from 'react-blessed';

interface SectionProps {
  title?: string,
  description?: string,
}

export const SectionLayout: FC<SectionProps> = ({ title, description, children }) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const closeButtonRef = useRef<ButtonElement>(null);

  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [closeButtonRef.current]);

  const closeSection = (key: any, event: any) => {
    if (event.name === 'enter') {
      setIsOpen(!isOpen);
    }
  }

  return isOpen && (
    <box
      focusable
      name='section-layout'
      top='center'
      left='center'
      width='60%'
      height='60%'
      border={{ type: 'line' }}
      style={{ bg: 'green', border: { fg: 'green' }}}
      keys
    >
      <button
        focusable
        name='section-close-button'
        left='2%'
        mouse
        keys
        shrink
        ref={closeButtonRef}
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
      <line focusable={false} orientation='horizontal' top='5%'></line>
      <box
        focusable
        label='Project'
        top='8%'
        left='left'
        width='60%'
        border={{ type: 'line' }}
      >
        {children}
      </box>
      <text
        focusable={false}
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
        focusable={false}
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
