import { useState } from "react";
import { useCollapse } from "react-collapsed";

interface PlanCardProps {
  name: string;
  description: string;
  price?: string;
  features: string[];
  extraFeatures: string[];
  className?: string;
}

export default function PlanCard({
  name,
  description,
  price,
  features,
  extraFeatures,
  className,
}: PlanCardProps) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div className={`relative my-4 ${className}`}>
      <div className="flex flex-col justify-center items-center lg:flex-col gap-20">
        <div className="hexagon lg:-mt-20 lg:mx-2 flex relative">
          <svg
            width="400"
            height="371"
            viewBox="0 0 609 371"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_7)">
              <path
                d="M30 52C30 34.3269 44.3269 20 62 20H547C564.673 20 579 34.3269 579 52V207.892C579 221.204 570.759 233.125 558.306 237.828L327.643 324.945C308.808 332.059 287.998 331.903 269.271 324.507L50.2458 238.008C38.028 233.183 30 221.381 30 208.245V52Z"
                fill="#003150"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_7"
                x="0"
                y="0"
                width="609"
                height="370.169"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_7"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_7"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="text-white text-center lg:text-center absolute top-20 px-10 lg:px-20">
            <h2 className="mt-3 font-brokenConsole text-4xl">{name}</h2>
            <p className="mt-4 font-montserrat text-sm font-thin">
              {description}
            </p>
            <div className="mt-5 font-billy text-2xl">Rp{price}</div>
          </div>
        </div>
        <div className="-mt-72 pt-40 mb-5 flex flex-col px-6 w-1/3 bg-[#B3E872] rounded-[40px] w-[400px] shadow-lg">
          <ul
            id="myList"
            className="pl-3 text-[#fffef7] text-sm mt-6 space-y-3 leading-5"
          >
            {features.map((feature, index) => (
              <li className="flex text-[#003150] font-montserrat" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#003150"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="ml-3">{feature}</div>
              </li>
            ))}
            {extraFeatures.map((extraFeature, index) => (
              <li className="flex" key={index}>
                <section {...getCollapseProps()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#003150"
                    className="w-5 h-5 shrink-0 float-left"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="ml-8 text-[#003150] font-montserrat">{extraFeature}</div>
                </section>
              </li>
            ))}
          </ul>
          <button
            className="text-white justify-center items-center py-3 mt-5 -mb-5 bg-[#F4347F] rounded-[44px] hover:scale-105 hover:shadow-[0_0px_15px_0px_#F4347F]"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}
