import CarouselComponent from './carousel';

/* eslint-disable react/no-unescaped-entities */
export default function AboutCoimbatore() {
  return (
    <>
      <div className='container mx-auto'>
        <div className='h-[300px]   bg-[url("https://t4.ftcdn.net/jpg/04/91/39/61/360_F_491396168_Wr8iysSxcFnG9VMIJUYOpiUpyl0d85tr.jpg")] bg-center bg-cover overlay flex items-center justify-center'>
          <h1 className='relative z-20 text-4xl text-white font-bold'>
            About Coimbatore
          </h1>
        </div>
        <p className='text-justify p-5 text-[17px]'>
          Coimbatore, often hailed as the "Manchester of South India," stands as
          a beacon of industrial prowess and commercial vibrancy within the
          Republic of India. Situated at the foothills of the majestic Nilgiri
          Hills and nestled along the banks of the serene Noyyal River in the
          western region of Tamil Nadu, this city boasts not only a strategic
          geographical location but also a serene ambiance enriched by its
          natural surroundings. With the Western Ghats embracing it from all
          sides, Coimbatore enjoys a salubrious climate, characterized by
          moderate temperatures and occasional cool breezes, making it an
          inviting destination for residents and visitors alike. Renowned as a
          significant manufacturing and textile hub, Coimbatore is a cornerstone
          of India's industrial landscape. Its textile industries, ranging from
          large-scale factories to small and medium enterprises, dominate the
          economic landscape, fueled by the surrounding cotton fields that
          contribute to the city's prosperity. In addition to its industrial
          prominence, Coimbatore is also emerging as a melting pot of cultures
          and traditions. Its cosmopolitan essence, brought about by a diverse
          populace, enriches the social fabric and fosters an atmosphere of
          inclusivity and growth. Moreover, Coimbatore's strategic location
          renders it easily accessible from all the southern states of India,
          positioning it as an ideal destination for trade fairs and business
          conferences. This accessibility enhances its allure as a commercial
          hub, drawing entrepreneurs, investors, and traders from far and wide.
          Beyond its economic significance, Coimbatore boasts a rich tapestry of
          tourist attractions that captivate visitors from across the state and
          beyond. From historic landmarks to serene natural landscapes, the city
          offers a plethora of experiences that cater to diverse interests and
          preferences. In essence, Coimbatore epitomizes the harmonious
          coexistence of tradition and modernity, poised on the brink of rapid
          development and progress. With its unique blend of cultural heritage,
          industrial dynamism, and natural splendor, it is primed to emerge as
          one of the fastest-growing cities in India, promising boundless
          opportunities for prosperity and growth.
        </p>
      </div>
      <CarouselComponent />
    </>
  );
}
