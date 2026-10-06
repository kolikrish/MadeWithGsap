'use client';
import React, { useEffect } from "react";
import '@/app/globals.css'
import Button from '@/components/Buttons/index';
import Image from "next/image";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const toLetters = (str) => str.split("").map((c) => [c, c]);

  // "A masterclass"
  const row1Letters = toLetters("A masterclass");

  // "in leadership"
  const row2Letters = toLetters("in leadership");

  // "Made for titans"
  const row3Letters = toLetters("Made for titans");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timers = document.querySelectorAll(".hero-container .timer");
      const group1 = [];
      const group2 = [];
      const group3 = [];

      timers.forEach((el, i) => {
        if (i % 3 === 0) group1.push(el);
        else if (i % 3 === 1) group2.push(el);
        else group3.push(el);
      });

      const tl1 = gsap.timeline();
      tl1.from(group1, {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      const tl2 = gsap.timeline({ delay: 0.2 });
      tl2.from(group2, {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });

      const tl3 = gsap.timeline({ delay: 0.4 });
      tl3.from(group3, {
        yPercent: 50,
        duration: 0.5,
        stagger: 0.1
      });
    });

    return () => ctx.revert();
  }, []);

  
  const LetterColumn = ({ letterArray, extraClasses = "", globalIndex }) => (
    <div className={`w-fit flex flex-col items-center justify-center translate-y-[-50%] timer leading-[1.2] tracking-[-0.4vw] timer-${globalIndex} ${extraClasses}`}>
      {letterArray.map((digit, idx) => (
        <p key={idx} className="font-display leading-[0.9] text-[7.9vw] max-sm:text-[11vw] max-md:text-[9.5vw] translate-y-[-2%]" style={{ minWidth: digit === " " ? "0.3em" : "auto" }}>
          {digit === " " ? "\u00A0" : digit}
        </p>
      ))}
    </div>
  );

  
  const TextRow = ({ letters, isFirstRow = false, startIndex = 0 }) => (
    <div className="h-[7.5vw] max-sm:h-[10.5vw] max-md:h-[8vw] overflow-hidden w-fit flex pr-[0.5vw] ">
      {letters.map((letterArray, index) => (
        <LetterColumn 
          key={startIndex + index} 
          letterArray={letterArray}
          extraClasses={isFirstRow && index === 0 ? "text-neutral-900" : ""}
          globalIndex={startIndex + index}
        />
      ))}
    </div>
  );

  return (
    <section className="w-fit hero-container h-[90vh] max-md:h-[60vh] max-sm:h-[50vh] text-neutral-900" id='hero'>
      <div className="flex max-md:flex-col items-end justify-end max-md:items-start max-md:justify-end gap-[2vw] max-md:gap-0 max-sm:pt-0 max-md:pt-[20vw] h-full px-[2vw]">
        <div className="w-[63%] pb-[2vw]">
          <div>
            {/* First row: "A masterclass" */}
            <TextRow letters={row1Letters} isFirstRow={true} startIndex={0} />
            
            {/* Second row: "in leadership" */}
            <TextRow letters={row2Letters} startIndex={row1Letters.length} />
            
            {/* Third row: "Made for titans" */}
            <TextRow letters={row3Letters} startIndex={row1Letters.length + row2Letters.length} />
          </div>
        </div>
        
        <div className="w-[37%] max-md:w-full flex flex-col items-start gap-[1vw] px-[2vw] py-[3vw] max-md:py-0 max-md:pt-[1vw] max-md:px-0">
          <div className="h-[50%] max-sm:w-full max-md:w-[60%] py-[1vw]">
            <p className="text-[1.6vw] max-md:font-display max-md:text-[3vw] max-sm:text-[5vw] leading-[1.3] text-black">
              An intensive 8-week executive cohort for senior creative directors, design leads, and founders ready to command category-defining influence.
            </p>
          </div>
          <div className="h-[50%] max-md:h-full max-md:pt-[2vw]">
            <Button title='explore curriculum' isArrow={true} isBorder={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
