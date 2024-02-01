import { FC, useState } from "react";
import parse from 'html-react-parser';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IconProps {
  id: number;
  open?: number;
}

const Icon: FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const FAQ: FC = () => {
  const [open, setOpen] = useState<number|undefined>();
  const handleOpen = (value: number) => setOpen(open === value ? undefined : value);
  const faqItems = [
    {
      "question": "Apa itu IFest?",
      "answer": "Informatics Festival atau IFest adalah acara tahunan Himpunan Mahasiswa Informatika (HIMAFORKA) Universitas Atma Jaya Yogyakarta. Pada tahun 2024 ini, IFest#12 mengambil tema \"Eternal Technology : A Symphony from Informatics for The Future\" dengan berbagai susunan kompetisi dan acara yang tentunya menarik!"
    },
    {
      "question": "Apa saja yang diselenggarakan di IFest#12 ini?",
      "answer": "IFest#12 menyelenggarakan beberapa kompetisi dan acara, antara lain: <ul className=\"list-outside list-disc pl-4\"> <li> Innovative Informatics Contest (I2C) </li> <li> Web Development Competition (WDC) </li> <li> Mobile UI/UX Competition (MUC) </li> <li> Seminar Nasional </li> </ul> Selain itu IFest#12 juga menyediakan berbagai produk-produk menarik yang dapat dibeli hanya di IFEST Store."
    },
    {
      "question": "Bagaimana cara mendaftar untuk setiap event IFest?",
      "answer": "Pendaftaran diri dan tim dapat dilakukan melalui situs https://ifest.uajy.ac.id/dash/register. Kamu bisa mendaftarkan diri dan tim selama masa pendaftaran (masa pendaftaran untuk setiap kompetisi dan acara berbeda-beda)."
    },
    {
      "question": "Apa tujuan diselenggarakannya IFest?",
      "answer": "IFest diselenggarakan dengan tujuan sebagai berikut: <ul className=\"list-outside list-disc pl-4\"> <li> Dapat memupuk dan mengembangkan minat dan bakat generasi muda dalam bidang teknologi informasi, </li> <li> Dapat mengembangkan pola pikir yang maju terhadap teknologi tanpa mengesampingkan nilai-nilai kemanusiaan, </li> <li> Membangun semangat berkompetisi yang positif sebagai manusia yang utuh dan sebagai generasi penerus bangsa yang menjunjung nilai kejujuran, </li> <li> Sebagai sarana untuk menuangkan ide-ide dan kreatifitas peserta, serta </li> <li> Menggali, menampung, menyalurkan, dan mengembangkan kemampuan serta pengetahuan mahasiswa sekaligus mencari bibit-bibit unggul. </li> </ul>"
    },
    {
      "question": "Di mana bisa mencari informasi seputar IFest?",
      "answer": "Situs web ini telah menyajikan informasi mendetil terkait event-event yang diselenggarakan. Namun untuk mengajukan pertanyaan dan informasi lebih lanjut silakan hubungi kami melalui Instagram @ifest_uajy atau melalui LINE OA @ykb1847q."
    },
    {
      "question": "Siapa penyelenggara IFest#12 2024?",
      "answer": "Rangkaian kegiatan Informatics Festival (IFest) #12 tahun 2024 diselenggarakan oleh Program Studi Informatika Universitas Atma Jaya Yogyakarta, bekerjasama dengan Himpunan Mahasiswa Informatika (HIMAFORKA)."
    }
  ];
  return (
    <div className="flex flex-col justify-start items-center h-fit bg-gradient-to-b from-[#739AB3] to-[#3483A2]">
      <div className="mt-12 mb-6 mx-8 lg:mx-0 flex flex-row justify-center items-center gap-4">
        <img src="images/star.webp" alt="star-img" className="w-12"/>
        <div className="font-brokenConsole font-bold text-2xl lg:text-3xl text-white text-center">FREQUENTLY ASKED QUESTIONS</div>
        <img src="images/star.webp" alt="star-img" className="w-12"/>
      </div>
      <div className="w-9/12 lg:w-1/2 flex flex-col gap-3">
        {faqItems.map((item, index) => {
          return(
            <Accordion
              open={open === index}
              icon={<Icon id={index} open={open} />}
              placeholder={undefined}
              className="bg-[#1F5E86] rounded-lg px-4 pb-3 shadow-lg"
              key={index}
            >
              <AccordionHeader 
                onClick={() => handleOpen(index)} 
                placeholder={undefined} 
                className="text-white font-montserrat text-sm hover:text-white"
              >
                {item.question}
              </AccordionHeader>
              <AccordionBody>
                <div className="text-white font-montserrat">
                  {parse(item.answer)}
                </div>
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
