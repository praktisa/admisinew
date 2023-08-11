import React from 'react'
import Image from 'next/image'
import IF from './ImageFill.module.css'

interface ImageFill_inter {
    src: string
    animated: boolean
    quality: number
}

export default function ImageFill({ src, animated, quality }: ImageFill_inter) {



    return (
        <>
            <Image
                src={`/KendaraanDinas/${src}.jpg`}
                fill
                className={`
                    ${IF['IMG']} 
                    ${animated === true ? IF['animated'] : null}
                `}
                alt={src}
                quality={quality}
                // priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                loading='lazy'
                placeholder='blur'
                blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            />
        </>
    )
}
