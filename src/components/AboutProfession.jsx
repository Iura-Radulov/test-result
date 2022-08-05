import bgImage from 'images/javascript-anim.jpg';
import link from 'images/command-line-1.svg';
export default function AboutProfession() {
  return (
    <div className="bg-[#FBFBFB]">
      <div className=" flex justify-end pt-[100px] ">
        <div className="bg-[#9088FF] w-[100%] 2xl:w-[1760px]  pl-[20px] sm:pl-[95px] pt-[65px] 2xl:flex 2xl:rounded-l-[30px] justify-between">
          <div className="md:w-[760px] ">
            <h2 className="text-white text-[24px] md:text-[54px] font-semibold mb-[40px]">
              Профессия <br /> Frontend — разработчик
            </h2>
            <p className="text-white text-[20px] md:text-[30px] font-semibold mb-[25px]">
              Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
              знанием технологий больше, чем у других кандидатов
            </p>
            <p className="text-white text-[18px] font-normal mb-[60px] leading-[27px]">
              Начиная с основ изучишь JavaScript, разберешься с самыми
              популярными технологиями, научишься писать Frontend{' '}
              <span className="font-semibold">на фреймворке</span> и связывать
              его с Backend.
              <span className="font-semibold">
                Навыки после курса оцениваются от 100 т.р.
              </span>
            </p>
            <button
              type="button"
              className="text-white text-[18px] font-normal w-[205px] md:w-[325px] h-[75px] bg-[#ED7138] rounded-[24px]"
            >
              Задать вопрос об обучении
            </button>
          </div>
          <div className="relative h-auto pt-[35px]">
            <div className="hidden md:block rounded-t-xl truncate">
              <img src={bgImage} alt="javascript-animation" />
            </div>
            <div
              className="sm:w-[400px] h-[165px]  xl:bg-white rounded-[24px]  pl-[24px] pr-[24px]
          ml-[70px] absolute bottom-[-185px] left-0 xl:bottom-[-65px] xl:left-[-160px] xl:pt-[40px]"
            >
              <p className="text-[#0F1214] text-[16px] sm:text-[16px] leading-[24px]">
                <span className="text-[#ED7138]">Обучение</span> для тех,{' '}
                <span className="text-[#979EA2]">
                  кто готов учиться 10 часов в неделю
                </span>{' '}
                ,{' '}
                <span className="text-[#ED7138]">чтобы получить результат</span>
                . Мы даем{' '}
                <span className="text-[#979EA2]">необходимые навыки</span> на
                продвинутом уровне,{' '}
                <span className="text-[#979EA2]">убирая все лишнее</span>
              </p>
            </div>
            <div className="absolute bottom-[-105px] left-0 flex items-center justify-center xl:bottom-[75px] xl:left-[-35px] bg-[#7F76FF] w-[75px] h-[75px] rounded-[24px]">
              <img className="w-[40px]" src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ul className="pt-[240px] pl-[10px] sm:pt-[140px] lg:flex xl:pt-[80px] xl:w-[1230px] ">
          <li className="flex items-center pb-[20px] lg:pr-[60px]">
            <p className="text-[#ED7138] text-[52px] lg:text-[72px] font-semibold ">
              293
            </p>
            <p className="text-[#0F1214] text-[16px] pl-[15px]">
              HD видеоурока длительностью 3 - 15 минут
            </p>
          </li>
          <li className="flex items-center pb-[20px] lg:pr-[60px]">
            <p className="text-[#ED7138] text-[52px] lg:text-[72px] font-semibold ">
              6
            </p>
            <p className="text-[#0F1214] text-[16px] pl-[15px]">
              Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)
            </p>
          </li>
          <li className="flex items-center pb-[20px]">
            <p className="text-[#ED7138] text-[52px] lg:text-[72px] font-semibold ">
              193
            </p>
            <p className="text-[#0F1214] text-[16px] pl-[15px]">
              заданий и тестов для закрепления
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
