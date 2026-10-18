import type { ImgHTMLAttributes } from 'react'
import { getPhoto, type PhotoKey } from '../../lib/media'

type PictureProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'width' | 'height'
> & {
  photo: PhotoKey
  alt: string
  sizes: string
  priority?: boolean
}

export function Picture({ photo, alt, sizes, priority = false, className, ...img }: PictureProps) {
  const picture = getPhoto(photo)
  return (
    // `contents` so the <img> sizes against the parent as if <picture> weren't there.
    <picture className="contents">
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        {...img}
      />
    </picture>
  )
}
