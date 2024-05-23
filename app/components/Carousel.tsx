'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import ResponsiveImage from './ResponsiveImage'
import Button from './Button'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './CarouselSelectedSnapDisplay'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <div>
      <div
        className='embla rounded-2xl aspect-[4/3]'
        ref={emblaRef}
      >
        <div className='embla__container cursor-pointer'>
          <ResponsiveImage
            src='/images/desktop/hero.jpeg'
            alt='Cabin in the countryside'
            sizes='(min-width: 1280px) 50vw, 100vw'
            width={4032}
            height={3024}
          />
          <ResponsiveImage
            src='/images/desktop/1.jpeg'
            alt='Cabin in the countryside'
            sizes=' (min-width: 1280px) 50vw, 100vw'
            width={4032}
            height={3024}
          />
          <ResponsiveImage
            src='/images/desktop/2.jpeg'
            alt='Cabin in the countryside'
            sizes=' (min-width: 1280px) 50vw, 100vw'
            width={4032}
            height={3024}
          />
        </div>
      </div>
      <div className='flex pt-4 pb-1 px-1 justify-between items-center text-xl'>
        <div className='flex gap-2'>
          <Button
            type='secondary'
            onClick={scrollPrev}
            icon={<ArrowBackIosOutlinedIcon fontSize='inherit' />}
          />

          <Button
            type='secondary'
            onClick={scrollNext}
            icon={<ArrowForwardIosOutlinedIcon fontSize='inherit' />}
          />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  )
}