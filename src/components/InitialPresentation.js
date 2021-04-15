import React, { useState } from "react";
import "./InitialPresentation.scss";
import "../assets/css/effects.scss";
import Typist from "react-typist";

const InitialPresentation = () => {
  const dialogs = [
    <Typist
      key={0}
      onTypingDone={() => setTypingDone(true)}
      stdTypingDelay={5}
      cursor={{
        show: true,
        blink: true,
        element: "_",
        hideWhenDone: false,
        hideWhenDoneDelay: 0,
      }}
    >
      <Typist.Delay ms={800} />
      <span className="bit-text">Hi, I am Julian Mendonca.</span>
      <br />
      <Typist.Delay ms={500} />
      <span className="bit-text">I am a Professional Googler</span>
      <Typist.Backspace count={20} delay={1000} />
      <Typist.Delay ms={200} />
      <span className="bit-text">Full Stack Web Developer.</span>
    </Typist>,
    <Typist
      key={1}
      onTypingDone={() => setTypingDone(true)}
      stdTypingDelay={20}
      cursor={{
        show: true,
        blink: true,
        element: "_",
        hideWhenDone: false,
        hideWhenDoneDelay: 0,
      }}
    >
      <span className="bit-text">
        I am very passionate about programming and perfecting my own skills.
      </span>
      <br />
      <Typist.Delay ms={500} />
      <span className="bit-text">
        Thank you for taking some time and look at my resume! :)
      </span>
    </Typist>,
  ];
  const [typingDone, setTypingDone] = useState(false);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);

  return (
    <div className="initial-presentation background-black">
      <div className="user-image"></div>
      <div className="presentation-description">
        {dialogs[currentDialogIndex]}
        {typingDone && currentDialogIndex < dialogs.length - 1 ? (
          <button
            className="next-button bit-text blink"
            onClick={() => {
              setTypingDone(false);
              setCurrentDialogIndex(currentDialogIndex + 1);
            }}
          >
            click to continue
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default InitialPresentation;
