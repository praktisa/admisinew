import React from 'react'
import GetListKD from '@/app/Api/KendaraanDinas/ListID/static/GetListKD'
import getKendaraanByPlat from '@/app/Api/KendaraanDinas/DetailKD/static/getKendaraanByPlat'
import getTerpinjamMobil from '@/app/Api/KendaraanDinas/Pinjam/static/getTerpinjamMobil'
// import Detail from '@/content/KendaraanDinas/Detail/Detail'
import Shimerloading from '@/components/loading/Shimerloading'
import DetailNew from '@/content/KendaraanDinas/Detail/DetailNew'





interface ParamPinjam {
    params: { dk: string }
}


export default async function Page({ params }: ParamPinjam) {

    const Kendaraan: any = await getKendaraanByPlat(params.dk)
    const tgl: any = await getTerpinjamMobil(params.dk)

    return (
        <>

            <Shimerloading loop={1} />
            <DetailNew data={Kendaraan} terpinjam={tgl} />
        </>
    )
}


export async function generateStaticParams() {
    const ListDK = await GetListKD()

    return ListDK.map((dk: any) => ({
        dk: dk.ID,
    }))
}
