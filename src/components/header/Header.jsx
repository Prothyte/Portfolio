import React, {useEffect, useState} from 'react'
import "./Header.css"
import TerminalCard from "./TerminalCard";

const Header = () => {

    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const targetText = "Alex";
        let index = 0;

        const typingInterval = setInterval(() => {
            setTypedText(targetText.slice(0, index));
            index++;

            if (index > targetText.length) {
                clearInterval(typingInterval);
            }
        }, 500);

        return () => clearInterval(typingInterval);
    }, []);
  return (
      <React.Fragment>
          <div className="text-white min-h-[80vh] flex items-center justify-center">
              <div className="max-w-3xl mx-auto text-left">
                  <h1 className="text-4xl font-extrabold mb-4 ">
                      Hello, I'm{' '}
                      <span className="coding-text">{typedText}<span className="cursor">_</span></span>
                  </h1>
                  <p className="text-lg mb-8">
                      A Software Developer based in Slovakia.
                  </p>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                      <TerminalCard
                          title="About Me"
                          content="Greetings! I'm a student pursuing my studies in Informatics at a Technical University of Kosice. I'm mainly focused in python and full-stack development"
                      />
                      <TerminalCard
                          title="My Expertise"
                          content=""
                      />
                  </div>

              </div>
          </div>
          <div className="tech-stack flex justify-center gap-[5%] opacity-40">
              <i className="fab fa-html5 fa-2x"></i>
              <i className="fab fa-css3 fa-2x"></i>
              <i className="fab fa-js fa-2x"></i>
              <i className="fab fa-python fa-2x"></i>
              <i className="fab fa-node fa-2x"></i>
              <i className="fab fa-react fa-2x"></i>
              <i className="fab fa-c fa-2x"></i>
              <i className="fab fa-java fa-2x"></i>
              <i className="fab fa-git fa-2x"></i>
          </div>
          <div className="flex flex-col justify-center items-center h-[20vh] text-center">
              <div><a href="#about">Scroll down</a></div>
          </div>
      </React.Fragment>
  )
}

export default Header