import React, { useEffect, useState } from "react";

const titles = [
  "React.js Developer",
  "MERN Stack Developer",
  "Node.js Developer",
  "MERN Stack Trainer",
  "Web Developer",
  "JavaScript Developer",
  "Freelancer",
  "Frontend Developer",
  "Backend Developer"
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[loopNum % titles.length];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center px-4 py-28 bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white min-h-screen"
    >
      <img
        src="/me.png"
        alt="Bhaskar Banerjee"
        className="w-28 h-28 rounded-full border-4 border-yellow-300 shadow-xl mb-6"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-green-300 animate-pulse">
        I'm Bhaskar Banerjee
      </h1>
      <p className="text-xl sm:text-2xl mb-8 h-8">
        <span className="text-white font-semibold tracking-wide">
          {currentText}
          <span className="blinking-cursor">|</span>
        </span>
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <button
          onClick={() => scrollTo("#projects")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-105"
        >
          Contact Me
        </button>
      </div>

      {/* Optional Tip */}
      <p className="text-sm text-gray-400 mt-10">
        Scroll down to explore my work 👇
      </p>
    </section>
  );
};

export default Hero;
