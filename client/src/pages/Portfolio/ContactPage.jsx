import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Contáctame</h1>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-transparent bg-purple-700 text-white focus:border-purple-500 focus:bg-purple-600 focus:ring-0"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-transparent bg-purple-700 text-white focus:border-purple-500 focus:bg-purple-600 focus:ring-0"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-md border-transparent bg-purple-700 text-white focus:border-purple-500 focus:bg-purple-600 focus:ring-0"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-yellow-400 px-4 py-2 text-sm font-medium text-purple-800 shadow-sm hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
            >
              Enviar mensaje
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
