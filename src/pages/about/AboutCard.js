import { useState, useEffect, useRef } from 'react';
import Global from '../Global.module.css';
import Style from './AboutPage.module.css';
import AboutBook from './AboutBook.js';

const AboutCard = ({ item }) => {
  const [walkthroughColor, setWalkthroughColor] = useState("#FFFFFF");
  const [dynamicClass, setDynamicClass] = useState("");
  const [currentURL, setCurrentURL] = useState("");
  const [index, setIndex] = useState(0);
  const walkthroughRef = useRef(null);
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);

  useEffect(() => {
    const walkthroughElem = walkthroughRef.current;

    // Attach event listeners here (optional, can be done in render)
    if (walkthroughElem) {
      walkthroughElem.addEventListener('click', (event) => {
        if (event.target.classList.contains('nextScreen')) {
          handleNextScreen();
        } else if (event.target.classList.contains('prevScreen')) {
          handlePrevScreen();
        } else if (event.target.classList.contains('close')) {
          handlecloseModal();
        }
      });
    }

    return () => {
      // Clean up event listeners (optional)
      if (walkthroughElem) {
        walkthroughElem.removeEventListener('click', (event) => { /* ... */ });
      }
    };
  });

  const handleNextScreen = () => {
    if (index < indexMax()) {
      setIndex(index + 1);
    }
  };

  const handlePrevScreen = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleBackground = (index) => {
    if (item.versions) {
      const keys = Object.keys(item.versions); //Get the keys of the versions object (['us', 'es'])
      const versionKey = keys[index];
      setWalkthroughColor(item.versions?.[versionKey]?.cardColor);
      setDynamicClass(item.versions?.[versionKey]?.dynamicClass);
      setCurrentURL(item.versions?.[versionKey]?.url);
    }
  }

  const handlecloseModal = () => {
    walkthroughRef.current.classList.remove(`${Style.reveal}`);
    setTimeout(() => {
      walkthroughRef.current.classList.remove(`${Style.show}`);
      setIndex(0);
    }, 200);
  };

  const indexMax = () => {
    const screens = walkthroughRef.current.querySelectorAll(`.${Style.screen.replace(/\+/g, '\\+')}`);
    if (screens.length > 0) {
      return screens.length - 1;
    } else {
      return 0;
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */  // ? Do not delete:
  useEffect(() => {
    reset();
    goTo(index);
  }, [index]); // Update buttons whenever index changes
  /* eslint-disable react-hooks/exhaustive-deps */  // ? Necessary comments to disable an unecessary warning. Didn't know comments could work as commands

  const goTo = (newIndex) => {
    if (indexMax() > 0) {
      const screens = walkthroughRef.current.querySelectorAll(`.${Style.screen.replace(/\+/g, '\\+')}`);  // ? Regex comments out the '+' in my CSS module selectors' classNames, they crash querySelectorAll()
      const dots = walkthroughRef.current.querySelectorAll(`.${Style.dot.replace(/\+/g, '\\+')}`);

      handleBackground(newIndex);
      screens[newIndex].classList.add(`${Style.active}`);
      dots[newIndex].classList.add(`${Style.active}`);
    }
  };

  const reset = () => {
    const screens = walkthroughRef.current.querySelectorAll(`.${Style.screen.replace(/\+/g, '\\+')}`);
    const dots = walkthroughRef.current.querySelectorAll(`.${Style.dot.replace(/\+/g, '\\+')}`);

    screens.forEach(screen => screen.classList.remove(`${Style.active}`));
    dots.forEach(dot => dot.classList.remove(`${Style.active}`));
  };

  return (
    <div className={[Global.AlcarodianBook, Style.AboutAlcarodianTitle].join(' ')}>
      <div ref={walkthroughRef} className={[Style.walkthrough, Style.show, Style.reveal, Style[dynamicClass]].join(' ')} style={{ backgroundColor:walkthroughColor }}>
        
        <div className={Style.walkthroughPagination}>
            <div className={[Style.dot, Style.active].join(' ')}></div>
            <div className={Style.dot}></div>
        </div>

        <div className={Style.walkthroughBody}>
            <ul className={[Style.screens, Style.animate].join(' ')}>
              <a href={currentURL} target="_blank" rel="noopener noreferrer" style={currentURL === "" ? { pointerEvents: "none" } : {}}>
                { /* LANGUAGE VERSIONS (US/ES) */ }
                {Object.entries(item.versions).map(([locale, content]) => (
                  <AboutBook
                    key={content.id}
                    content={content}
                  />
                ))}
              </a>
            </ul>

            <button ref={prevBtn} className={Style.prevScreen} onClick={handlePrevScreen}>
              <i className='icon-angle-left'></i>
            </button>
            <button ref={nextBtn} className={Style.nextScreen} onClick={handleNextScreen}>
              <i className='icon-angle-right'></i>
            </button>
        </div>

      </div>
    </div>
  );
};

export default AboutCard;