import { motion } from "motion/react";

type PlanCardProps = {
  plan: {
    titulo: string;
    descripcion: string;
    incluye: string[];
    opcional: string[];
    color: string;
  };
};

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <motion.div
      className="bg-[#181818] 
            p-6
            md:px-10
            xl:px-12 xl:py-9
        "
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        x: { type: "spring", visualDuration: 0.6, bounce: 0.5 },
      }}
      viewport={{ amount: 0.5, once: true }}
    >
      <h3
        className={`${plan.color} text-center mb-2.5 font-bold
            text-2xl
            lg:text-3xl
        `}
      >
        {plan.titulo}
      </h3>

      <p
        className="text-gray-400 text-center
            lg:text-lg
        "
      >
        {plan.descripcion}
      </p>

      <p
        className={`${plan.color} font-bold
            text-lg mt-7
            lg:text-xl
        `}
      >
        Incluye:
      </p>

      <ul className="pl-6">
        {plan.incluye.map((item) => (
          <li key={item}
            className="text-gray-400 list-disc
                lg:text-lg
            "
          >
            {item}
          </li>
        ))}
      </ul>

      <p
        className={`${plan.color} font-bold
            text-lg mt-7
            lg:text-xl
        `}
      >
        Opcional (Con costo adicional):
      </p>

      <ul className="pl-6">
        {plan.opcional.map((item) => (
          <li key={item}
            className="text-gray-400 list-disc
                    lg:text-lg
                "
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
