import React, { Children } from 'react'
import SD from './Slider.module.css'


interface Slider__inter {
    children?: React.ReactNode
    withNav?: boolean
    // plat: string
}



export function Slider({ children, withNav = true }: Slider__inter) {


    let ArrChild = Children.toArray(children)

    function SlideItem({ type }: { type: string }) {
        return (
            <>
                {
                    ArrChild.map((ac: any, i: number) => {
                        if (type === 'item') {
                            return (
                                <div id={'s' + i} key={'slide' + i} >
                                    {ac}
                                </div>
                            )
                        } else if (type === 'nav') {
                            return (
                                <a href={'#s' + i} key={'href' + i}>
                                    <div>{i + 1}</div>
                                </a>
                            )
                        }

                    })
                }
            </>
        )
    }


    return (
        <>
            <div className={SD['SliderContainer']} >
                <div className={SD['Slider']}>

                    <div className={SD['Slides']}>
                        <SlideItem type={'item'} />
                    </div>

                    <div className={SD['SliderNav']} >
                        <SlideItem type={'nav'} />
                    </div>
                </div>
            </div>
        </>
    )
}


interface SlidesGroup__inter {
    children?: React.ReactNode
    title: string
}

export function SlidesGroup({ children, title }: SlidesGroup__inter) {
    return (
        <span className={SD['SlidesGroup']} >
            <h3>{title}</h3>
            {children}
        </span>
    )
}