import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { arrowLeft, arrowRight } from '_svg'

import { IAdvertPhotos } from './advert-photos-types'

import styles from './advert-photos.module.scss'

function AdvertPhotos({ images, brand, id }: IAdvertPhotos) {
  const imgContainerRef = useRef<HTMLAnchorElement>(null)

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  function handleLeftClick() {
    const previousPhotoIndex = currentPhotoIndex - 1

    if (previousPhotoIndex >= 0) {
      setCurrentPhotoIndex(previousPhotoIndex)
    }
  }

  function handleRightClick() {
    const nextPhotoIndex = currentPhotoIndex + 1

    if (nextPhotoIndex <= images.length - 1) {
      setCurrentPhotoIndex(nextPhotoIndex)
    }
  }

  function handleDotClick(index: number) {
    setCurrentPhotoIndex(index)
  }

  function scrollToCurrentPhoto() {
    if (!imgContainerRef.current) return

    const imageElement = imgContainerRef.current.querySelector(
      `.img-container-${currentPhotoIndex}`
    ) as HTMLDivElement

    if (!imageElement) return

    const leftPos = imageElement.offsetLeft

    try {
      imgContainerRef.current.scrollTo({
        left: leftPos,
        behavior: 'smooth',
      })
    } catch (error) {
      imgContainerRef.current.scrollLeft = leftPos
    }
  }

  useEffect(() => {
    if (imgContainerRef.current) {
      scrollToCurrentPhoto()
    }
  }, [currentPhotoIndex])

  return (
    <div className={styles.container}>
      <button
        disabled={currentPhotoIndex === 0}
        type="button"
        onClick={handleLeftClick}
      >
        {arrowLeft}
      </button>

      <Link href={`/${brand}/${id}`}>
        <a className={styles.img_container} ref={imgContainerRef}>
          {images.map((src, index) => (
            <div key={src} className={`img-container-${index}`}>
              <Image
                alt={`${index + 1}ª foto do Imóvel`}
                src={src}
                width={285}
                height={215}
              />
            </div>
          ))}
        </a>
      </Link>

      <button
        disabled={currentPhotoIndex === images.length - 1}
        type="button"
        onClick={handleRightClick}
      >
        {arrowRight}
      </button>

      <div className={styles.index_dots}>
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={index === currentPhotoIndex ? styles.active : undefined}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default AdvertPhotos
