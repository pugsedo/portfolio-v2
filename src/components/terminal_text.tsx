import { useEffect, useState } from "react";

const texts = ["just some guy", "i write code for fun", "self-proclaimed \"game dev\"", "wants to be better", "interesting 🤔", "stop using javascript everywhere", "ai tech bro"];
const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1000;
const PAUSE_AFTER_DELETING = 500;

export default function TerminalText() {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, PAUSE_AFTER_DELETING);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPING);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <p className="max-h-6 before:content-['❯'] before:mr-2 inline-block text-md text-muted-foreground font-mono">
      {displayed}

      <span className="text-muted-foreground inline-block ml-1 align-baseline relative top-[1px] right-[2px] w-[9px] h-[15px] animate-caret-blink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9 15"
          className="w-[9px] h-[15px] fill-current"
        >
          <rect width="9" height="5" y="10" />
        </svg>
      </span>
    </p>
  );
}