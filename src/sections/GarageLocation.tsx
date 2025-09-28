// import CountryList from '@/components/CountryList';
// import DashedBorderContainer from '@/components/DashedBorderContainer';
// import Tag from '@/components/Tag';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';
// import globeImage from '../../public/assets/images/globe-image.png';
// import vectorLocationGarage from '../../public/assets/images/vector-location-garage.svg';

// export default function GarageLocation() {
//   const t = useTranslations('GarageLocation');

//   // Restructured data to work with the flattened JSON structure
//   const countriesData = [
//     {
//       country: t('germany.country'),
//       cities: [
//         t('germany.city0'),
//         t('germany.city1'),
//         t('germany.city2'),
//         t('germany.city3'),
//         t('germany.city4'),
//         t('germany.city5'),
//         t('germany.city6'),
//       ],
//     },
//     {
//       country: t('austria.country'),
//       cities: [t('austria.city0'), t('austria.city1'), t('austria.city2')],
//     },
//     {
//       country: t('switzerland.country'),
//       cities: [
//         t('switzerland.city0'),
//         t('switzerland.city1'),
//         t('switzerland.city2'),
//         t('switzerland.city3'),
//       ],
//     },
//     {
//       country: t('france.country'),
//       cities: [
//         t('france.city0'),
//         t('france.city1'),
//         t('france.city2'),
//         t('france.city3'),
//       ],
//     },
//   ];

//   return (
//     <section>
//       <div className='relative'>
//         <Image
//           src={vectorLocationGarage}
//           alt='Vector location garage'
//           className='absolute -z-10 left-0 w-full top-52 md:top-72 xl:top-40 2xl:top-0'
//         />

//         <DashedBorderContainer>
//           <div>
//             <div className='flex justify-center'>
//               <Tag>{t('tag')}</Tag>
//             </div>
//             <div className='w-full flex justify-center mt-6'>
//               <Image
//                 src={globeImage}
//                 alt='Globe image location'
//                 className='w-full md:max-w-2xl'
//               />
//             </div>
//           </div>
//           <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
//             <CountryList countries={countriesData.slice(0, 2)} />
//             <CountryList countries={countriesData.slice(2)} />
//           </div>
//         </DashedBorderContainer>
//       </div>
//     </section>
//   );
// }
