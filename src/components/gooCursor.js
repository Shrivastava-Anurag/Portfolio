import React, { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

const GooeyCursor = () => {
  let cursorInit = false;
  let hoverButton;
  let lastFrame = 0;
  let mousePosition = { x: 0, y: 0 };
  let dots = [];
  let idle = false;
  let timeoutID;

  const width = 25;
  const amount = 20;
  const sineDots = Math.floor(0.5 * amount);
  const idleTimeout = 150;

  class HoverButton {
    // ... (same as before)
  }

  class Dot {
    // ... (same as before)
  }

  const onMouseEnter = () => {
    hoverButton.hoverInAnim();
  };

  const onMouseLeave = () => {
    hoverButton.animatingHover ? (hoverButton.forceOut = true) : hoverButton.hoverOutAnim();
  };

  const buildDots = () => {
    for (let e = 0; e < amount; e++) {
      let t = new Dot(e);
      dots.push(t);
    }
  };

  const onMouseMove = (e) => {
    mousePosition.x = e.clientX - width / 2;
    mousePosition.y = e.clientY - width / 2;
    resetIdleTimer();
  };

  const onTouchMove = (event) => {
    mousePosition.x = event.touches[0].clientX - width / 2;
    mousePosition.y = event.touches[0].clientY - width / 2;
    resetIdleTimer();
  };

  const positionCursor = (e) => {
    let t = mousePosition.x;
    let i = mousePosition.y;

    dots.forEach((o, s, n) => {
      let h = n[s + 1] || n[0];

      if (!idle || s <= sineDots) {
        o.x = t;
        o.y = i;
        o.draw(e);
      }

      if (!idle || s <= sineDots) {
        const e = 0.35 * (h.x - o.x);
        const s = 0.35 * (h.y - o.y);
        t += e;
        i += s;
      }
    });
  };

  const startIdleTimer = () => {
    timeoutID = setTimeout(goInactive, idleTimeout);
    idle = false;
  };

  const resetIdleTimer = () => {
    clearTimeout(timeoutID);
    startIdleTimer();
  };

  const goInactive = () => {
    idle = true;
    dots.forEach((e) => e.lock());
  };

  const render = (e) => {
    positionCursor(e - lastFrame);
    lastFrame = e;
    requestAnimationFrame(render);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    hoverButton = new HoverButton('button');
    lastFrame += new Date();
    buildDots();
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  useEffect(() => {
    const inkTablet = window.matchMedia('(max-width: 991px)');
    const inkMobile = window.matchMedia('(max-width: 479px)');

    const inkMediaObserver = () => {
      if (!inkMobile.matches && !inkTablet.matches && !cursorInit) {
        cursorInit = true;
        init();
      }
    };

    inkTablet.addListener(inkMediaObserver);
    inkMobile.addListener(inkMediaObserver);

    return () => {
      inkTablet.removeListener(inkMediaObserver);
      inkMobile.removeListener(inkMediaObserver);
    };
  }, []);

  const init = () => {
    hoverButton = new HoverButton('button');
    lastFrame += new Date();
    buildDots();
    render();
  };

  return (
    <div>
      <div id="ink-cursor" className="ink-cursor"></div>
      <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default GooeyCursor;
