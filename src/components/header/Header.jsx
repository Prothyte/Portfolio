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
        }, 200);

        return () => clearInterval(typingInterval);
    }, []);
  return (
      <div className="text-white min-h-screen flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-left">
              <h1 className="text-4xl font-extrabold mb-4 ">
                  Hello, I'm{' '}
                  <span className="coding-text">{typedText}<span className="cursor">_</span></span>
              </h1>
              <p className="text-lg mb-8">
                  A Software Developer based in Eastern Slovakia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <TerminalCard
                      title="About Me"
                      content="Greetings! I'm a student pursuing my studies in Informatics at a Technical University
                      of Kosice."
                  />
                      <TerminalCard
                          title="What I do"
                          content="Lorem ipsum"
                      />
              </div>
          </div>
      </div>
  )
}

export default Header