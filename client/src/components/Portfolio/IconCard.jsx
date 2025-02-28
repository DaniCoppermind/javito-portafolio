import { motion } from 'framer-motion';

const IconCard = ({ icon, link = null }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.1,
        rotate: [0, 10, -10, 10, -10, 0],
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className="hover:text-secondary-yellow mt-4 cursor-pointer text-6xl"
    >
      {icon}
    </motion.a>
  );
};

export default IconCard;
