import React, { FC } from 'react';
import * as blessed from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';
import { AppLayout } from 'layout';
import { SectionLayout } from 'layout/section.layout';

const render = createBlessedRenderer(blessed);

const desc = 'This is a layout test';

const AppModule: FC = () => {
  return (
    <>
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
    </>
  );
}

const scr = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Blessed test ground'
});

scr.key(['escape', 'q', 'C-c'], () => process.exit(0));

scr.key(['tab'], () => {
  scr.focusNext(); 
  console.log(`current focus: ${scr.focused.index}`);
});

render(<AppModule />, scr);