import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  event: string,
  bg: string,
  person1: string,
  person2: string,
  no1: string,
  no2: string
}

const CP: FC<Props> = (props : Props) => {
  return (
    <div className="flex justify-center items-center text-white p-8 mt-12">
      <div className={`flex flex-col justify-center items-center p-8 rounded-xl`} style={{backgroundColor: props.bg}}>
        <div className="flex gap-2 items-center pb-6">
          <div className={`font-brokenConsole text-2xl ${props.event === "SPONSOR" ? "lg:text-xl" : "lg:text-3xl"}`}>{props.event}</div>
          <img src="/images/computer.webp" alt="computer-img"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <div className="font-montserrat text-lg">{props.person1}</div>
            <div>
              <a href={`https://wa.me/62${props.no1}`} target="_blank">
                <button className="flex flex-row justify-center items-center gap-2 bg-[#5ECC85] p-3 rounded-full">
                  <FaWhatsapp />
                  <div>0{props.no1}</div>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-montserrat text-lg">{props.person2}</div>
            <div>
              <a href={`https://wa.me/62${props.no2}`} target="_blank">
                <button className="flex flex-row justify-center items-center gap-2 bg-[#5ECC85] p-3 rounded-full">
                  <FaWhatsapp />
                  <div>0{props.no2}</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CP;
