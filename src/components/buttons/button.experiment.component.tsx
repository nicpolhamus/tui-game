import { SectionLayout } from "layout";
import React, { FC, useEffect, useRef } from "react";
import { useStore } from "stores";
import { ButtonElement, KeyPressEventHandler } from "react-blessed";
import { Widgets } from "neo-blessed";
import shallow from "zustand/shallow";

export const ButtonExperiment = (): FC => {
  const { isButtonExpActive, toggleButtonExp, counter, increment, decrement } =
    useStore(
      (state) => ({
        isButtonExpActive: state.isButtonExpActive,
        toggleButtonExp: state.toggleButtonExpActive,
        counter: state.buttonCounter,
        increment: state.increment,
        decrement: state.decrement,
      }),
      shallow
    );
  const thumbnailRef = useRef<ButtonElement>(null);

  const thumbnailHandler: KeyPressEventHandler = (
    key: any,
    event: Widgets.Events.IKeyEventArg
  ) => {
    if (event.name === "enter") {
      toggleButtonExp();
    }
  };

  const addHandler: KeyPressEventHandler = (
    key: any,
    event: Widgets.Events.IKeyEventArg
  ) => {
    if (event.name === 'enter') {
      increment();
    }
  };

  const minusHandler: KeyPressEventHandler = (
    key: any,
    event: Widgets.Events.IKeyEventArg
  ) => {
    if (event.name === 'enter') {
      decrement();
    }
  };

  useEffect(() => {
    if (thumbnailRef.current) {
      thumbnailRef.current.focus();
    }
  }, [thumbnailRef.current]);

  return (
    <>
      <button
        border={{ type: "line" }}
        focusable
        mouse
        keys
        shrink
        name="thumbnail-layout"
        onKeypress={thumbnailHandler}
        ref={thumbnailRef}
      >
        Button Experiment
      </button>
      {isButtonExpActive && (
        <SectionLayout
          title="Button Examples"
          description="A simple counter that decreases/increases via buttons"
        >
          <text>The current count: {counter}</text>
          <button
            border={{ type: "line" }}
            focusable
            mouse
            keys
            shrink
            name='button-exp-add'
            onKeypress={addHandler}
          >+</button>
          <button
            border={{ type: 'line' }}
            focusable
            mouse
            keys
            shrink
            name='button-exp-minus'
            onKeypress={minusHandler}
          >-</button>
        </SectionLayout>
      )}
    </>
  );
};
