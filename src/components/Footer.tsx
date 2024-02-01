import { motion } from "framer-motion";
import { FC } from "react";
import { MdEmail } from "react-icons/md";
import { SiInstagram, SiLine } from "react-icons/si";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }: Props) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <SiInstagram />;
      case 1:
        return <SiLine />;
      case 2:
        return <MdEmail />;
      case 3:
        return <img alt="" className="w-[15px]" src="/images/sponsors/ifest11/dewaweb-icon.webp" />;
    }
  };

  const data = [
    {
      "name": "Kompetisi",
      "data": [
        {
          "name": "Innovative Informatics Contest (I2C)",
          "link": "/i2c"
        },
        {
          "name": "Web Development Competition (WDC)",
          "link": "/wdc"
        },
        {
          "name": "Mobile UI/UX Competition (MUC)",
          "link": "/muc"
        }
      ]
    },
    {
      "name": "Acara",
      "data": [
        {
          "name": "Seminar Nasional",
          "link": "/semnas"
        }
      ]
    },
    {
      "name": "Bisnis",
      "data": [
        {
          "name": "Sponsor",
          "link": "/sponsor"
        }
      ]
    },
    {
      "name": "Akses",
      "data": [
        {
          "name": "Daftar",
          "link": "/dash/daftar"
        },
        {
          "name": "Masuk",
          "link": "/dash/masuk"
        }
      ]
    },
    {
      "name": "Sosial Media",
      "data": [
        {
          "name": "Instagram",
          "link": "https://www.instagram.com/ifest_uajy"
        },
        {
          "name": "LINE",
          "link": "https://line.me/ti/p/~@ykb1847q"
        },
        {
          "name": "Email",
          "link": "mailto:ifest@uajy.ac.id"
        }
      ]
    }
  ];
  
  return (
    <>
      <div
        className={`${className} grid justify-center gap-3 px-6 pb-4 pt-10 lg:grid-cols-7 lg:gap-8 lg:px-8`}
      >
        <motion.div
          animate={{ opacity: 1 }}
          className="w-24"
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="/">
            <img alt="ifest-logo" src="/images/ifest.webp" />
          </a>
        </motion.div>
        <div className="flex flex-col gap-2 text-left text-white">
          <div className="font-brokenConsole text-xl tracking-widest">IFest#12</div>
          <div className="font-montserrat opacity-70">
            IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu.
          </div>
        </div>
        {data.map((nav, index) => {
          return (
            <div className="flex flex-col gap-2 text-left text-white" key={index}>
              <div className="font-brokenConsole text-xl">{nav.name}</div>
              {nav.data.map((item, index) => {
                return nav.name === "Akses" ? (
                  <a
                    className="flex w-fit items-center gap-2 font-montserrat opacity-60 transition ease-in-out hover:translate-x-2 hover:opacity-90"
                    href={`https://ifest.uajy.ac.id${item.link}`}
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    className="flex w-fit items-center gap-2 font-montserrat opacity-60 transition ease-in-out hover:translate-x-2 hover:opacity-90"
                    href={item.link}
                    key={index}
                  >
                    {nav.name === "Sosial Media" ? getIcon(index) : ""}
                    {item.name}
                  </a>
                );
              })}
            </div>
          );
        })}
        <div className="col-span-full border-t-2 border-black/20" />
        <div className="col-span-full text-center font-retroica text-sm text-white opacity-80">
          2024 Design by WD IFest#12
        </div>
      </div>
    </>
  );
};

export default Footer;
