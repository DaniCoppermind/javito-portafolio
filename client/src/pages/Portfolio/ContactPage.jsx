import { useState } from 'react';
import { motion } from 'framer-motion';
import { AtSign, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg"
      >
        {!isSubmitted ? (
          <div className="p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="mb-2 text-3xl font-bold text-gray-800">
                  Contáctame
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y me pondré en contacto contigo pronto
                </p>
              </motion.div>

              <form onSubmit={handleSubmit}>
                <motion.div variants={containerVariants} className="space-y-4">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="text-primary-purple mb-1 block text-sm font-medium"
                    >
                      Nombre
                    </label>
                    <div className="relative">
                      <div className="text-secondary-green pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-800 shadow-sm transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="text-primary-purple mb-1 block text-sm font-medium"
                    >
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <div className="text-secondary-green pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <AtSign size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-800 shadow-sm transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="text-primary-purple mb-1 block text-sm font-medium"
                    >
                      Mensaje
                    </label>
                    <div className="relative">
                      <div className="text-secondary-green pointer-events-none absolute inset-y-3 left-0 flex items-start pl-3">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-800 shadow-sm transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                        placeholder="Escribe tu mensaje aquí..."
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-secondary-orange focus:ring-secondary-yellow flex w-full items-center justify-center rounded-lg py-3 font-medium text-white shadow-md transition-all hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: 'linear',
                          }}
                          className="mr-2"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                        </motion.div>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="bg-secondary-green mb-6 rounded-full p-3 text-white"
            >
              <CheckCircle size={48} />
            </motion.div>
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              ¡Mensaje enviado!
            </h2>
            <p className="mb-6 text-gray-600">
              Gracias por contactarme. Te responderé lo antes posible.
            </p>
            <Link
              to={'/'}
              className="bg-secondary-orange rounded-lg px-4 py-2 font-medium text-white transition-colors hover:opacity-90"
            >
              Volver al Inicio
            </Link>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
};

export default ContactPage;
