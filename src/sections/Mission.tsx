import DashedBorderContainer from '@/components/DashedBorderContainer';
import Tag from '@/components/Tag';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import vectorMisi from '../../public/assets/images/vector-misi.svg';

export default function Mission() {
  const t = useTranslations('Mission');
  return (
    <section>
      <DashedBorderContainer>
        {/* Vector Background */}
        <div className='absolute -z-10 top-0 left-0 hidden md:block'>
          <Image
            src={vectorMisi}
            alt='Vector misi'
            className='w-full h-fit'
            draggable='false'
          />
        </div>

        {/* Tag */}
        <div className='flex justify-center'>
          <Tag>{t('tag')}</Tag>
        </div>

        {/* Content */}
        <div className='max-w-4xl mx-auto relative '>
          {/* Text */}
          <div className='relative z-20 '>
            <h3 className='text-h4 md:text-h3 text-center text-accent font-medium mt-8'>
              {t('text1')} <span>{t('text2')}</span>
              {t('text3')}
            </h3>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
