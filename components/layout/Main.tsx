import { GridImage } from '../ui/GridImage'
import { emily, galleryConeD, galleryConeM, galleryMilkbottlesD, galleryMilkbottlesM, galleryOrangeD, galleryOrangeM, gallerySugarcubesD, gallerySugarcubesM, graphicD, graphicM, jennie, photographyD, photographyM, standOutD, standOutM, thomas, TransformD, TransformM } from '../util/Images'
import { TestCards } from '../ui/TestCards'

export const Main = () => {

  const cardData = [
     {
       img: emily,
       alt: 'Emily profile photo' ,
       name: 'Emily R.',
       position:'Marketing Director' ,
       text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
     },
     {
       img: thomas,
       alt: 'Thomas S. profile photo' ,
       name: 'Thomas S.' ,
       position:'Chief Operating Officer',
       text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
     },
     {
       img: jennie,
       alt: 'Jennie F profile photo',
       name:'Jennie F.' ,
       position: 'Business Owner',
       text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
     }
  ]

  const gridImages = [
    {
        mobile: galleryMilkbottlesM,
        desk:galleryMilkbottlesD,
        alt: 'gallery-Milk-bottles-image'
    },
    {
        mobile:  galleryOrangeM,
        desk: galleryOrangeD,
        alt: 'gallery-Orange-image'
    },
    {
        mobile: galleryConeM,
        desk: galleryConeD,
        alt: 'gallery-Cone-image'
    },
    {
        mobile: gallerySugarcubesM,
        desk:gallerySugarcubesD,
        alt: 'gallery-Sugar-cubes'
    }
  ]

  return (
    <main>
        <section className='flex flex-col'>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
               <section className=' order-2 xl:order-1 h-[400px]  xl:h-full text-center xl:text-left xl:p-10 p-4.5 xl:ml-15 place-content-center'>
                <h3 className='text-[35px] font-fraunces font-bold xl:text-4xl text-gray950'>Transform your <br className='hidden xl:block'/> brand</h3>
                <p className='my-3 font-barlow text-[18px] xl:w-[85%] xl:my-5 text-gray500'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href='#' className='font-black font-fraunces  text-[22px] text-gray-950 uppecase border-b-2 border-blue'>Learn more</a>
               </section>
               <GridImage mobile={TransformM} desktop={TransformD} alt='An egg' style='order-1 xl:order-2' width='w-full' />
            </div>
            <div className=' grid grid-cols-1 xl:grid-cols-2'>
                
               <section  className=' order-2 xl:order-2 h-[400px] xl:h-full text-center xl:text-left xl:p-10 xl:ml-15 p-4.5 place-content-center'>
                <h3 className='text-[35px] font-fraunces font-bold xl:text-4xl text-gray950'> Stand out to the <br /> right audience</h3>
                <p className='my-3 xl:w-[85%] xl:my-5 font-barlow text-[18px] text-gray500'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a href='#' className='font-black font-fraunces text-[22px] text-gray-950 uppecase border-b-2 border-blue '>Learn more</a>
               </section>
               <GridImage mobile={standOutM} desktop={standOutD} alt='An kind of glass' style='order-1 xl:order-1' width='w-full' />
            </div>
            <div className=' grid grid-cols-1 xl:grid-cols-2 '>
                <article className='relative '>
                    <GridImage mobile={graphicM} desktop={graphicD} alt='A cherry image' width='w-full'  />
                    <div className='absolute left-0 p-5 top-[60%] text-center text-green800 '>
                    <h3 className='font-fraunces font-bold text-[35px] mb-3.5' >Graphic design</h3>
                    <p className='xl:px-25 font-barlow text-[18px]'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </article>

                <article className='relative '>
                    <GridImage mobile={photographyM} desktop={photographyD} alt='An orange image' width='w-full'  />
                    <div className='absolute left-0 p-5 top-[60%] text-center text-blue '>
                    <h3 className='font-fraunces font-bold text-[35px] mb-3.5'>Photography</h3>
                    <p className='xl:px-25 font-barlow text-[18px]'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </article>
            </div>
        </section>
        <section className='flex flex-col items-center justify-center my-15 xl:mt-20 xl:mb-55 xl:p-5 place-items-center'>
            <h3 className='text-center uppercase tracking-widest xl:text-[22px] my-8 xl:my-25 text-[17px] font-fraunces font-bold '>Client testimonials</h3>
            <div className='flex flex-col mt-7 xl:flex-row gap-y-16 xl:gap-x-4 items-center justify-center '>
               {
                cardData.map((item,index)=> (
                    <TestCards key={index} img={item.img} alt={item.alt} name={item.name} position={item.position} text={item.text} />
                ))
               }
            </div>
        </section>
        <section className='grid grid-cols-2  xl:grid-cols-4'>
            {
                gridImages.map((item,index) => (
                    <GridImage key={index} mobile={item.mobile} desktop={item.desk} alt={item.alt} />
                ))
            }
        </section>
    </main>
  )
}
