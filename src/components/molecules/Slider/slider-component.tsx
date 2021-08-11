import { useEffect, useState, useRef } from 'react'

import Image from 'next/image'

import { arrowLeftSVG, arrowRightSVG } from '_svg'

import { ISlider, IUpdateArrows } from './slider-types'

import styles from './slider.module.scss'

function Slider({ images }: ISlider) {
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const [disableLeftArrow, setDisableLeftArrow] = useState(true)
  const [disableRightArrow, setDisableRightArrow] = useState(true)

  function updateArrowsVisibility(props?: IUpdateArrows) {
    if (!imgContainerRef.current) return

    const { scrollLeft, clientWidth, scrollWidth } =
      props || imgContainerRef.current

    if (scrollLeft <= 0) {
      setDisableLeftArrow(true)
    } else {
      setDisableLeftArrow(false)
    }

    if (scrollLeft + clientWidth >= scrollWidth) {
      setDisableRightArrow(true)
    } else {
      setDisableRightArrow(false)
    }
  }

  function handleLeftClick() {
    if (!imgContainerRef.current) return

    const leftMovement =
      window.innerWidth >= 768
        ? Math.floor(imgContainerRef.current.clientWidth * 0.8)
        : window.innerWidth

    const newScrollLeft = imgContainerRef.current.scrollLeft - leftMovement

    const { clientWidth, scrollWidth } = imgContainerRef.current

    try {
      imgContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    } catch (error) {
      imgContainerRef.current.scrollLeft -= leftMovement
    }

    updateArrowsVisibility({
      scrollLeft: newScrollLeft,
      clientWidth,
      scrollWidth,
    })
  }

  function handleRightClick() {
    if (!imgContainerRef.current) return

    const leftMovement =
      window.innerWidth >= 768
        ? Math.floor(imgContainerRef.current.clientWidth * 0.8)
        : window.innerWidth

    const newScrollLeft = imgContainerRef.current.scrollLeft + leftMovement

    const { clientWidth, scrollWidth } = imgContainerRef.current

    try {
      imgContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    } catch (error) {
      imgContainerRef.current.scrollLeft += leftMovement
    }

    updateArrowsVisibility({
      scrollLeft: newScrollLeft,
      clientWidth,
      scrollWidth,
    })
  }

  useEffect(() => {
    updateArrowsVisibility()

    const onResize = () => updateArrowsVisibility()

    window.removeEventListener('resize', onResize)

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className={styles.container}>
      <button
        type="button"
        disabled={disableLeftArrow}
        onClick={handleLeftClick}
      >
        {arrowLeftSVG}
      </button>
      <article className={styles.img_container}>
        <section ref={imgContainerRef}>
          {images.map((src, index) => (
            <div key={src} className={`img-container-${index}`}>
              <Image
                alt={`${index + 1}ª foto do Imóvel`}
                src={src}
                width={450}
                height={300}
                priority
              />
            </div>
          ))}
        </section>
      </article>
      <button
        type="button"
        disabled={disableRightArrow}
        onClick={handleRightClick}
      >
        {arrowRightSVG}
      </button>
    </section>
  )
}

export default Slider
