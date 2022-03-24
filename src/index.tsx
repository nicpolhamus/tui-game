import React, { FC } from 'react';
import * as blessed from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';
import { AppLayout } from 'layout';
import { ButtonExperiment } from 'components/buttons';

const render = createBlessedRenderer(blessed);

const App = (): FC => (
  <AppLayout 
    label={'Test Grounds'}
    top={5}
    right={5}
    bottom={5}
    left={5}
    style={{ bg: 'blue' }}
  >
    <ButtonExperiment />
  </AppLayout>
); 

const scr = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Blessed test ground'
});

scr.key(['escape', 'q', 'C-c'], () => process.exit(0));

scr.key(['tab'], () => {
  scr.focusNext();
});

render(<App />, scr);