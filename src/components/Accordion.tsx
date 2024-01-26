import minusIcon from "@/assets/images/icon-minus.svg";
import { useState } from "react";
import plusIcon from "@/assets/images/icon-plus.svg";

import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {
  isAccordionOpen?: boolean;
  question: string;
  answer: string;
};

export default function Accordion(props: Props) {
  const [animationParent] = useAutoAnimate();
  const [isAccordionOpen, setAccordion] = useState(
    props.isAccordionOpen || false
  );
  function toggleAccordion() {
    setAccordion(!isAccordionOpen);
  }
  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* q */}
      <p
        onClick={toggleAccordion}
        className=" flex justify-between gap-2  sm:text-lg font-semibold cursor-pointer "
      >
        Tes
        <span>{props.question}</span>
        {isAccordionOpen ? (
          <img src={minusIcon} alt="minus-icon" className=" h-6 w-auto" />
        ) : (
          <img src={plusIcon} alt="plus-icon" className=" h-6 w-auto" />
        )}
      </p>
      {/* ans */}
      {isAccordionOpen && (
        <p className="text-sm sm:text-base text-gray-400 ">{props.answer}</p>
      )}
    </div>
  );
}
