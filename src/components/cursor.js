import React, { useRef, useEffect } from 'react';
import TweenMax from 'gsap';

const Cursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const hoverablesRef = useRef([]);

  useEffect(() => {
    const hoverables = document.querySelectorAll('.hoverable');

    // Add hoverables to the ref array
    hoverablesRef.current = hoverables;

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    // document.body.addEventListener('scroll', updateCursorOnScroll); //Do not uncomment

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      // document.body.removeEventListener('scroll', updateCursorOnScroll); //Do not Uncomment

      for (let i = 0; i < hoverables.length; i++) {
        hoverables[i].removeEventListener('mouseenter', onMouseHover);
        hoverables[i].removeEventListener('mouseleave', onMouseHoverOut);
      }
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to(bigBallRef.current, 0.4, {
      x: e.clientX - 20,
      y: e.clientY - 21
    });
  
    TweenMax.to(smallBallRef.current, 0.1, {
      x: e.clientX - 5,
      y: e.clientY - 7
    });
  }

  // Update cursor position on scroll (Removng this coz there was no need of it.)
  // function updateCursorOnScroll() {
  //   const scrollY = window.scrollY || window.pageYOffset;
  //   const bigBallRect = bigBallRef.current.getBoundingClientRect();
  //   const smallBallRect = smallBallRef.current.getBoundingClientRect();
  //   TweenMax.to(bigBallRef.current, 0.4, {
  //     y: bigBallRect.top + scrollY - window.innerHeight / 2 + 21
  //   });
  //   TweenMax.to(smallBallRef.current, 0.1, {
  //     y: smallBallRect.top + scrollY - window.innerHeight / 2 + 7
  //   });
  // }

  // Hover an element
  function onMouseHover() {
    scaleBigBall(2);
  }

  function onMouseHoverOut() {
    scaleBigBall(1);
  }

  // Scale the big ball
  function scaleBigBall(scale) {
    TweenMax.to(bigBallRef.current, 0.3, {
      scale: scale
    });
  }

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
          <svg height="50" width="50">
            <circle cx="20" cy="20" r="20" strokeWidth="0"></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Cursor;