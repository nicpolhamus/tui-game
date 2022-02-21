import React, { FC } from 'react';
import blessed, { screen, Widgets } from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';
import { AppLayout } from 'layout';
import { SectionLayout } from 'layout/section.layout';

const render = createBlessedRenderer(blessed);

const desc = 'This is a layout test';

const AppModule: FC = () => (
  <AppLayout 
    label={'Test Grounds'}
    top={5}
    right={5}
    bottom={5}
    left={5}
    style={{ bg: 'blue' }}
  >
    <SectionLayout
      title='Test Project'
      description={desc}
    >
      test section!
    </SectionLayout>
  </AppLayout>
);

const screenOptions: Widgets.IScreenOptions = {
  autoPadding: true,
  smartCSR: true,
  title: 'Blessed test ground',
  warnings: true,
}

const scr = screen(screenOptions);

scr.key(['escape', 'q', 'C-c'], () => process.exit(0));

scr.key(['tab'], function(){ this.focusNext(); });

const app = render(<AppModule />, scr);

scr.render();