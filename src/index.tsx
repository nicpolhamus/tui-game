import React, { FC } from 'react';
import blessed, { screen } from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';
import { AppLayout } from 'layout';

const render = createBlessedRenderer(blessed);

const AppModule: FC = () => (
  <AppLayout 
    label={'test'}
    top={5}
    right={5}
    bottom={5}
    left={5}
  >
    Hello Terminal World!
  </AppLayout>
);

const scr = screen({
  autoPadding: true,
  smartCSR: true,
  title: 'blessed test ground',
});

scr.key(['escape', 'q', 'C-c'], () => process.exit(0));

const app = render(<AppModule />, scr);

scr.render();