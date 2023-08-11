// import { cookies } from 'next/headers'
// apabila melakukan fetch pada layout dengan menggunakan cookie,
// lakukan pada layout /fetcher, jangan pada route api bakal undefined


export default async function GetListKD() {
    let URL = `http://0.0.0.0:3000/Api/KendaraanDinas/ListID`


    const res: any = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            // 'Authentication': `${cookies().get('session')?.value}`

        },

    })

    if (!res.ok) {
        throw new Error('Gagal Ambil Daftar Kendaraan Dinas')
    }

    return res.json()

}

