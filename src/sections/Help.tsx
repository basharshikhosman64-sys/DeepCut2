import { RiScissors2Fill } from 'react-icons/ri';

type HelpProps = {
  title: string;
  description: string;
  backgroundClass: string;
  children: React.ReactNode;
};

export default function Help({
  title,
  description,
  backgroundClass,
  children,
}: HelpProps) {
  return (
    <section>
      <div className='relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl pt-10 border-x border-others-santasGray border-dashed'>
        <div className='absolute z-10 -top-[5px] -left-1 pt-3'>
          {/* <Image
            src={bulletIcon}
            alt='Bullet icon'
            className='size-2'
            draggable='false'
          /> */}
          <RiScissors2Fill />
        </div>

        <div className='absolute z-10 -top-[5px] -right-1 pt-3'>
          {/* <Image
            src={bulletIcon}
            alt='Bullet icon'
            className='size-2'
            draggable='false'
          /> */}
          <RiScissors2Fill />
        </div>
      </div>
      <div
        className={`relative z-20 container lg:px-16 w-full bg-cover bg-center ${backgroundClass} xl:rounded-[2rem]`}
      >
        <div className='flex flex-col justify-center w-full md:max-w-[720px] h-[496px]'>
          <h1 className='text-h2 md:text-h1 font-semibold text-text-whitePrimary px-4 py-2 rounded-xl bg-black/40 inline-block backdrop-blur-sm'>
            {title}
          </h1>
          <p
            className='text-body1 text-text-whiteSecondary mt-3
       bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 inline-block'
          >
            {description}
          </p>
          <div className='mt-8'>{children}</div>
        </div>
      </div>
      <div className='relative container max-w-xs md:max-w-[44rem] lg:max-w-6xl pt-10 border-x border-others-santasGray border-dashed'></div>
    </section>
  );
}
