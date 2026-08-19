"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const moodShapes = [
  { mouth: "M 40 42 Q 50 48 60 42", color: "#7FA99B" },
  { mouth: "M 40 45 Q 50 38 60 45", color: "#E09F3E" },
  { mouth: "M 40 42 L 60 42", color: "#4D7C8A" },
  { mouth: "M 38 48 Q 50 38 62 48", color: "#E06D53" },
];

export default function Mascot() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);

  const [moodIdx, setMoodIdx] = useState(0);
  const [knob1Rot, setKnob1Rot] = useState(0);
  const [knob2Rot, setKnob2Rot] = useState(0);
  const [switches, setSwitches] = useState([false, true, false]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !leftPupilRef.current || !rightPupilRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 3;

      const angle = Math.atan2(e.clientY - mascotCenterY, e.clientX - mascotCenterX);
      const distance = Math.min(3, Math.hypot(e.clientX - mascotCenterX, e.clientY - mascotCenterY) / 50);

      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;

      leftPupilRef.current.setAttribute("cx", (30 + pupilX).toString());
      leftPupilRef.current.setAttribute("cy", (23 + pupilY).toString());
      rightPupilRef.current.setAttribute("cx", (70 + pupilX).toString());
      rightPupilRef.current.setAttribute("cy", (23 + pupilY).toString());
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMascotClick = () => {
    setMoodIdx((prev) => (prev + 1) % moodShapes.length);
    if (needleRef.current) {
      const randomRotate = Math.floor(Math.random() * 120) - 60;
      needleRef.current.style.transform = `rotate(${randomRotate}deg)`;
    }
  };

  const rotateKnob = (knobNum: 1 | 2, e: React.MouseEvent) => {
    e.stopPropagation();
    if (knobNum === 1) setKnob1Rot((r) => r + 45);
    else setKnob2Rot((r) => r + 45);
  };

  const toggleSwitch = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSwitches((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const mood = { ...moodShapes[moodIdx], text: t.mascot.moods[moodIdx % t.mascot.moods.length] };

  return (
    <div
      id="mascot-container"
      ref={containerRef}
      className="relative z-10 flex flex-col items-center cursor-pointer group"
      onClick={handleMascotClick}
    >
      <div className="absolute -top-16 bg-cream text-ink font-pixel text-xs p-3 rounded-xl border-3 border-ink shadow-retro z-30 transition-all duration-300 transform scale-100 max-w-[220px] text-center leading-relaxed">
        &quot;{mood.text}&quot;
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cream border-r-3 border-b-3 border-ink rotate-45"></div>
      </div>
      <div className="w-2 h-8 bg-ink rounded-t relative flex justify-center mt-6">
        <div
          className="absolute -top-3 w-4 h-4 rounded-full border-2 border-ink animate-bounce shadow-md"
          style={{ backgroundColor: mood.color, transition: "background-color 0.3s" }}
        ></div>
      </div>

      <div className="w-48 sm:w-56 h-40 sm:h-44 bg-dusty-blue border-4 border-ink rounded-3xl p-3 shadow-retro relative flex flex-col items-center justify-center">
        <div className="absolute -right-3 top-6 w-3 h-12 bg-mustard border-2 border-ink rounded-r"></div>
        <div className="absolute -left-3 top-6 w-3 h-12 bg-coral border-2 border-ink rounded-l"></div>

        <div className="crt-screen w-full h-full flex flex-col items-center justify-center p-2 relative pointer-events-none">
          <svg className="w-32 h-20" viewBox="0 0 100 60">
            <ellipse cx="30" cy="25" rx="8" ry="12" fill="#7FA99B" stroke="#2B211B" strokeWidth="2" />
            <circle ref={leftPupilRef} cx="30" cy="23" r="3" fill="#2B211B" />
            <circle cx="28" cy="20" r="1.5" fill="#FFFFFF" />

            <ellipse cx="70" cy="25" rx="8" ry="12" fill="#7FA99B" stroke="#2B211B" strokeWidth="2" />
            <circle ref={rightPupilRef} cx="70" cy="23" r="3" fill="#2B211B" />
            <circle cx="68" cy="20" r="1.5" fill="#FFFFFF" />

            <path
              d={mood.mouth}
              stroke="#7FA99B"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{ transition: "d 0.3s" }}
            />
          </svg>
          <div className="absolute bottom-1 left-2 font-pixel text-[8px] text-sage/70" dir="ltr">
            PXL-01
          </div>
        </div>
      </div>

      <div className="w-20 h-3 bg-mustard border-2 border-ink rounded-full -my-1 z-10 shadow-sm pointer-events-none"></div>

      <div className="w-44 sm:w-52 h-36 sm:h-40 bg-mustard border-4 border-ink rounded-2xl p-3 shadow-retro relative flex flex-col justify-between cursor-default" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center bg-cream-dark p-2 border-2 border-ink rounded-lg">
          <div className="w-10 h-10 bg-cream rounded-full border-2 border-ink relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={needleRef}
                className="w-0.5 h-4 bg-coral origin-bottom transition-transform duration-500 rotate-[-30deg]"
              ></div>
            </div>
            <span className="font-pixel text-[6px] text-ink mt-3" dir="ltr">
              PWR
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={(e) => rotateKnob(1, e)}
              className="w-7 h-7 bg-coral rounded-full border-2 border-ink shadow-retro-sm flex items-center justify-center"
            >
              <div
                className="w-1 h-3 bg-cream rounded-full transition-transform duration-200"
                style={{ transform: `rotate(${knob1Rot}deg)` }}
              ></div>
            </button>
            <button
              onClick={(e) => rotateKnob(2, e)}
              className="w-7 h-7 bg-sage rounded-full border-2 border-ink shadow-retro-sm flex items-center justify-center"
            >
              <div
                className="w-1 h-3 bg-ink rounded-full transition-transform duration-200"
                style={{ transform: `rotate(${knob2Rot}deg)` }}
              ></div>
            </button>
          </div>
        </div>

        <div className="flex justify-around items-center bg-dusty-blue/30 p-2 border-2 border-ink rounded-lg" dir="ltr">
          <div className="flex flex-col items-center">
            <span className="font-pixel text-[7px]">SYNC</span>
            <div
              className="w-4 h-6 bg-cream border border-ink rounded flex items-center justify-center cursor-pointer"
              onClick={(e) => toggleSwitch(0, e)}
            >
              <div className={`w-3 h-2 bg-coral rounded transition-transform ${switches[0] ? "translate-y-1" : ""}`}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-pixel text-[7px]">LINE</span>
            <div
              className="w-4 h-6 bg-cream border border-ink rounded flex items-center justify-center cursor-pointer"
              onClick={(e) => toggleSwitch(1, e)}
            >
              <div className={`w-3 h-2 bg-sage rounded transition-transform ${switches[1] ? "translate-y-1" : ""}`}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-pixel text-[7px]">DATA</span>
            <div
              className="w-4 h-6 bg-cream border border-ink rounded flex items-center justify-center cursor-pointer"
              onClick={(e) => toggleSwitch(2, e)}
            >
              <div className={`w-3 h-2 bg-mustard rounded transition-transform ${switches[2] ? "translate-y-1" : ""}`}></div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 left-4 right-4 flex justify-between px-2">
          <div className="w-12 h-6 bg-ink rounded-lg border-2 border-cream flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
          </div>
          <div className="w-12 h-6 bg-ink rounded-lg border-2 border-cream flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
