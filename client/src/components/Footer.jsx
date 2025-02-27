import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de suscripción
    console.log('Email suscrito:', email);
    setEmail('');
  };

  return (
    <footer className="py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Columna 1: Logo y descripción */}
          <div>
            <motion.img
              src="/Logo.png"
              alt="Javito Logo"
              className="mb-4 h-16"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-sm">
              Transformando ideas en historias visuales cautivadoras. Editor de
              video profesional con pasión por la creatividad y la innovación.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="transition-colors hover:text-[#F5E83D]">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="transition-colors hover:text-[#F5E83D]"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-[#F5E83D]"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-[#F5E83D]"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Suscripción y redes sociales */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Mantente Conectado</h3>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-grow rounded-l-md bg-[#492B7A] px-4 py-2 text-white"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  className="rounded-r-md bg-[#F5E83D] px-4 py-2 font-semibold text-[#492B7A]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribir
                </motion.button>
              </div>
            </form>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Javito. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
