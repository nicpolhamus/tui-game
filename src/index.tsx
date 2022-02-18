import React, { FC } from 'react';
import blessed, { screen } from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';

const render = createBlessedRenderer(blessed);

const AppModule: FC = () => (
  <box
    top='center'
    left='center'
    width='80%'
    height='80%'
    border={{ type: 'line' }}
    style={{ border: { fg: 'blue' } }}
  >
    Hello World! This is test for HMR!
  </box>
);

const scr = screen({
  autoPadding: true,
  smartCSR: true,
  title: 'blessed test ground',
});

scr.key(['escape', 'q', 'C-c'], () => process.exit(0));

const app = render(<AppModule />, scr);

scr.render();