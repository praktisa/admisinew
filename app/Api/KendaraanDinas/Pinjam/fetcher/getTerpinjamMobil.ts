import { cookies } from 'next/headers'

export default async function getTerpinjamMobil(dk: any) {
    let URL = `http://0.0.0.0:3000/Api/KendaraanDinas/Pinjam/getTerpinjamMobil?dk=${dk}`

    const res: any = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authentication': `${cookies().get('session')?.value}`
        },
        // next: { tags: [dk] }
    })




    if (!res.ok) {
        throw new Error('Gagal Ambil Mobil Terpinjam Pada Plat ' + dk)
    }

    return res.json()
}
