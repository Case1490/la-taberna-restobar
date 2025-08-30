import { motion } from "framer-motion";
import {
  FaStar,
  FaUtensils,
  FaCheckCircle,
  FaMotorcycle,
  FaWineBottle,
  FaUsers,
} from "react-icons/fa";

const Benefits = () => {
  const reasons = [
    {
      icon: <FaStar className="w-8 h-8 text-yellow-400" />,
      title: "Sabor único",
      text: "Recetas auténticas con el toque especial de la casa.",
    },
    {
      icon: <FaUtensils className="w-8 h-8 text-yellow-400" />,
      title: "Ingredientes frescos",
      text: "Productos de primera calidad, directo del mar y la granja.",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 text-yellow-400" />,
      title: "Porciones generosas",
      text: "Platos bien servidos que realmente satisfacen.",
    },
    {
      icon: <FaMotorcycle className="w-8 h-8 text-yellow-400" />,
      title: "Delivery rápido",
      text: "Tu pedido caliente y en perfectas condiciones hasta tu puerta.",
    },
    {
      icon: <FaWineBottle className="w-8 h-8 text-yellow-400" />,
      title: "Variedad para todos",
      text: "Desde alitas hasta pescados, mariscos y bebidas.",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-yellow-400" />,
      title: "Atención cercana",
      text: "Un trato cálido y personalizado que te hará sentir en casa.",
    },
  ];

  return (
    <div className="py-16 bg-bestfood text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título con animación */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegirnos?
        </motion.h2>

        {/* Grid con animaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-black/50 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center gap-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
