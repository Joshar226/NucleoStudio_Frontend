import { motion } from 'motion/react';
import { type JSX } from 'react'

type ServicioCardProps = {
    servicio: {
        icon: JSX.Element;
        titulo: string;
        descripcion: string;
    }
}

export default function ServicioCard({servicio} : ServicioCardProps) {
  return (
    <motion.div 
        className='bg-[#181818] flex flex-col items-center gap-6 text-center
            p-6
            lg:p-7
        '
        initial={{opacity: 0, x:-150}}  
        whileInView={{opacity: 1, x: 0}}
        transition={{
            duration: 0.4,
            x: { type: 'spring', visualDuration: 0.6, bounce: 0.5  }
        }}
        viewport={{amount: 0.5}}
    >
        <div className='
            w-12
        '>
            {servicio.icon}
        </div>
        <h3 className='
            text-xl
            lg:text-2xl
        '>{servicio.titulo}</h3>  
        <p  className='text-gray-400
            lg:text-lg
        ' 
        >{servicio.descripcion}</p>
    </motion.div>
  )
}
