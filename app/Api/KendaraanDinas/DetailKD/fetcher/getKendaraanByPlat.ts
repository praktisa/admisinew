import { cookies } from 'next/headers'

export default async function getKendaraanByPlat(dk: string) {

    let URL = `http://0.0.0.0:3000/Api/KendaraanDinas/DetailKD?dk=${dk}`

    const res: any = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            // 'Authentication': `${cookies().get('session')?.value}`
        },
    })


    if (!res.ok) {
        throw new Error('Gagal Mengambil Detil Kendaraan By Plat')
    }

    return res.json()
}