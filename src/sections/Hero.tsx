'use client';

type HeroProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  backgroundClass?: string;
};

export default function Hero({
  title,
  description,
  children,
  backgroundClass,
}: HeroProps) {
  // Use dynamic background if no specific class is provided
  const bgClass = backgroundClass || 'bg-hero-dynamic';

  return (
    <section className='xl:px-7 xl:pt-7'>
      <div
        className={`container lg:px-16 w-full h-[42.5rem] bg-cover bg-center xl:rounded-[2rem] ${bgClass}`}
      >
        <div className='flex flex-col items-start justify-center h-full mx-auto '>
          <h1 className='text-text-whitePrimary text-6xl md:text-title font-semibold mt-32 w-full md:w-[519px] bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 inline-block'>
            {title}
          </h1>
          <p className='mt-3 text-body1 text-text-whiteSecondary w-full md:w-[519px] bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 inline-block'>
            {description}
          </p>
          <div className='flex items-end justify-between w-full'>
            {children}
          </div>
        </div>
      </div>
      <div className='container max-w-xs md:max-w-[44rem] lg:max-w-6xl pb-10 border-x border-others-santasGray border-dashed'></div>
    </section>
  );
}
