import GetListKDAll from '@/app/Api/KendaraanDinas/ListKD/static/GetListKDAll'
import CardKD from '@/components/Card/CardKendaraanDinas/CardKD'
import Link from 'next/link'
import React from 'react'

interface DataMobil {
    name: string,
    plat: string,
    img: string
}

export default async function Page() {

    const ListMobil = await GetListKDAll()

    return (
        <>

            {
                ListMobil.map((mob: any, i: number) => {
                    let kd: string = mob.STR_PLAT.replaceAll(" ", "")

                    return (

                        <Link key={mob.STR_PLAT} href={`KendaraanDinas/pinjam/${kd}`} scroll={false}>
                            <CardKD
                                name={mob.STR_NAMA}
                                plat={mob.STR_PLAT}
                                img={mob.STR_IMG}
                                status={""}
                                seksi={""}
                                loading={false}
                            />
                        </Link>

                    )
                })
            }

        </>
    )
}

