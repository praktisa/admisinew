import React from 'react'
import { HeadDetail, LayoutForm } from '@/content/KendaraanDinas/Detail/Server/S_Detail'
import { Slider, SlidesBody, SlidesFooter, SlidesGroup, SlidesNavManual } from '@/components/Slider/Slider'
import { ButtonBack } from './Client/C_Detail'

import ImageFill from '@/components/Image/ImageFill'
import TextArea from '@/components/Input/TextArea/TextArea'
import Kalender from '@/content/Kalender/KalenderCookie'



interface Detail_Inter {
    data: any
    terpinjam: any
    tag: string
}


export default function DetailNew({ data, terpinjam, tag }: Detail_Inter) {
    const { STR_NAMA, STR_PLAT, STR_IMG } = data


    return (
        <>
            <HeadDetail nama={STR_NAMA} plat={STR_PLAT} />



            <LayoutForm >

                <Slider>

                    <SlidesGroup title={"Pilih Tanggal"}>

                        <SlidesBody>
                            <Kalender terpinjam={terpinjam} />
                            {/* <div>Halo</div> */}
                        </SlidesBody>

                        <SlidesFooter>
                            <div></div>
                            <SlidesNavManual goto={1} tag={tag}>Lanjut &#8594;</SlidesNavManual>
                        </SlidesFooter>

                    </SlidesGroup>

                    <SlidesGroup title={"Lokasi dan Tujuan"}>

                        <SlidesBody>
                            <TextArea label={"Lokasi"} rows={0} />
                            <TextArea label={"Tujuan Pinjam"} rows={0} />
                        </SlidesBody>

                        <SlidesFooter>
                            <SlidesNavManual goto={0} tag={tag} >&#8592; Sebelum</SlidesNavManual>
                            <div>Simpan</div>
                        </SlidesFooter>
                    </SlidesGroup>

                </Slider>

            </LayoutForm>

            <ButtonBack />

            <ImageFill src={STR_IMG} animated={true} quality={75} />
        </>
    )
}
