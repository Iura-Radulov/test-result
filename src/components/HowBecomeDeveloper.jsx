import studentsProjects from 'images/students-project.jpg';

export default function HowBecomeDeveloper() {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="pl-[20px] pt-[30px] text-center">
        <h2 className="text-[24px] md:text-[54px] font-bold mb-[40px]">
          Как именно ты станешь разработчиком
        </h2>
        <p className="text-[16px] md:text-[24px]  mb-[60px] lg:w-[970px] text-center inline-block">
          На курсе ты не просто изучаешь теоретический материал. в процессе
          изучения ты повторяете за действующим разработчиком, после чего
          <span className="font-semibold ml-[3px] ">
            закрепляешь знания на заданиях и проектах.
          </span>
        </p>
      </div>

      <div className=" relative flex flex-col items-center">
        <div className="relative flex flex-col items-center mb-[25px]">
          <img
            className="mb-[25px]"
            src={studentsProjects}
            alt="example of students projects"
          />
          <p>Проекты учеников</p>
          <div className="md:flex mt-[30px]">
            <div
              className="md:mr-[80px] 2xl:absolute 2xl:top-[110px] 2xl:left-[-300px]
          w-[325px] mb-[25px] py-[24px] px-[20px] border rounded-[14px] border-solid
          text-[14px] bg-white h-fit"
            >
              <p className="mb-[15px] font-semibold  text-[#9088FF] uppercase">
                2 Командных проекта
              </p>
              <p className="  ">
                Симуляция комерческого проекта - получаете ТЗ и организовываете
                командную разработку. Прокачивая навыки для будущей работы.
              </p>
              <p className="font-semibold ">Проекты на тему:</p>
              <p className="">- JavaScript плагин "Контекстное меню"</p>
              <p className="">
                - Cайт на React, презентующий команду участников
              </p>
            </div>
            <div
              className="2xl:absolute  
            2xl:bottom-[10px] 2xl:right-[-250px]
          w-[325px] mb-[25px] py-[24px] px-[20px] border rounded-[14px]
          border-solid text-[14px] bg-white h-fit"
            >
              <p className="mb-[15px] font-semibold  text-[#9088FF] uppercase">
                Индивидуальные проекты
              </p>
              <p className="  ">
                Чтобы свободно чуствовать себя на позиции junior необходим опыт
                разработки. Вы создадите 3 проекта изучая материал от простого к
                сложному:
              </p>

              <p>1. Проект корзина с товарами для интернет-магазина</p>
              <p>2. Социальная сеть для поиска и знакомств</p>
              <p>3.Дипломный проект на выбранную вами тему:</p>
              <p> - Учет доходов и рассходов</p>
              <p> - Бронирование отелей</p>
              <p>
                - Интернет-магазин или схожий по сложности проект, которым вы
                выберети и утвердите с куратором
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//sm:bottom-[-290px] sm:left-[10px]
// sm:bottom-[-460px] sm:right-[10px]
