import icon1 from 'images/atom.svg';
import icon2 from 'images/Subtract.svg';
import icon3 from 'images/nano-technology.svg';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function HardSkills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="md:flex 2xl:justify-center"
    >
      <ul className="md:flex px-[25px] sm:px-[45px] 2xl:w-[1430px] ">
        <motion.li
          style={{ scaleX }}
          className="flex flex-col items-center mb-[25px] md:mr-[15px] lg:mr-[50px]"
        >
          <img src={icon1} alt="icon 1" />
          <p className="text-white text-[18px] md:text-[22px] font-medium mt-[30px]">
            Создашь с помощью фреймворка React визуальную часть приложения:
            элементы, анимация
          </p>
        </motion.li>
        <motion.li
          style={{ scaleX }}
          className="flex flex-col items-center mb-[25px] md:mr-[15px] lg:mr-[50px]"
        >
          <img src={icon2} alt="icon 2" />
          <p className="text-white text-[18px] md:text-[22px] font-medium mt-[30px]">
            Изучишь NodeJS на достаточном уровне чтобы связывать frontend и
            backend
          </p>
        </motion.li>
        <motion.li
          style={{ scaleX }}
          className="flex flex-col items-center mb-[25px] "
        >
          <img src={icon3} alt="icon 3" />
          <p className="text-white text-[18px] md:text-[22px] font-medium mt-[30px]">
            Овладеешь базой, от которого можно отталкиваться и учить любую
            технологию на JavaScript
          </p>
        </motion.li>
      </ul>
    </motion.div>
  );
}
