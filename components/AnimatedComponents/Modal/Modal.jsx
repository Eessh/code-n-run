import { motion } from "framer-motion";
import BackDrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <BackDrop onClick={props.close}>
      <motion.div
        // drag
        // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="Modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {props.children}
      </motion.div>
    </BackDrop>
  )
}

export default Modal;

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const newspaper = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};


const badSuspension = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transform: "scale(0) rotateX(-360deg)",
  },
  visible: {
    y: "-25vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export { dropIn, badSuspension, flip, newspaper };
