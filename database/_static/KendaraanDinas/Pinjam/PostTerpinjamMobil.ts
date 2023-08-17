
import POST from '@/database/Method/POST';
import Connection from '@Connection';



export default async function PostTerpinjamMobil(dk: string, fetch: boolean) {



    if (fetch === false) {

        return null


    } else {
        let URL = `http://0.0.0.0:3000/Api/KendaraanDinas/Pinjam/postPinjamMobil`
        let res = await POST(URL, false, { next: { tags: [dk] }, body: JSON.stringify(dk) })


        return res.data
    }


}
