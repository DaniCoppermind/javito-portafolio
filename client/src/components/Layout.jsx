import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.main
    // initial={{ opacity: 0, y: 20 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ duration: 0.8 }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
