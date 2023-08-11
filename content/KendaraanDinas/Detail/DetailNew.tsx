import React from 'react'
import { HeadDetail, LayoutForm } from '@/content/KendaraanDinas/Detail/Server/S_Detail'
import ImageFill from '@/components/Image/ImageFill'
import { Slider, SlidesGroup } from '@/components/Slider/Slider'
import TextArea from '@/components/Input/TextArea/TextArea'
import Kalender from '@/content/Kalender/KalenderCookie'
import { ButtonBack } from './Client/C_Detail'


interface Detail_Inter {
    data: any
    terpinjam: any
}


export default function DetailNew({ data, terpinjam }: Detail_Inter) {
    const { STR_NAMA, STR_PLAT, STR_IMG } = data


    return (
        <>
            <HeadDetail nama={STR_NAMA} plat={STR_PLAT} />



            <LayoutForm >
                <Slider>

                    <SlidesGroup title={"Pilih Tanggal"}>
                        <Kalender />
                    </SlidesGroup>

                    <SlidesGroup title={"Pilih Lokasi"}>
                        <TextArea label={""} rows={17} />
                    </SlidesGroup>

                    <SlidesGroup title={"Tujuan Pinjam"}>
                        <TextArea label={"Tujuan pinjam"} rows={17} />
                    </SlidesGroup>


                </Slider>
            </LayoutForm>

            <ButtonBack />

            <ImageFill src={STR_IMG} animated={true} quality={75} />
        </>
    )
}
