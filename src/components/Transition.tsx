import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props{
  children: ReactNode;
}
const Transition: FC<Props> = ({children}) => {
  return (
    <motion.div
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
      transition = {{duration: 3}}
    >
      {children}
    </motion.div>
  );
};

export default Transition;