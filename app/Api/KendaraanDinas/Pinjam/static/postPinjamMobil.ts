// import { getCookie } from 'cookies-next'

export default async function postPinjamMobil(BodyData: any) {
    let URL = `http://0.0.0.0:3000/Api/KendaraanDinas/Pinjam/postPinjamMobil`

    const res: any = await fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // 'Authentication': `${getCookie('session')}`
        },
        next: { tags: [BodyData] },
        body: JSON.stringify(BodyData)
    })


    if (!res.ok) {
        throw new Error('Gagal Pinjam Mobil')
    }

    return res.json()
}
