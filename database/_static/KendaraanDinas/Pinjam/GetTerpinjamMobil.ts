import GET from '@/database/Method/GET';
import Connection from '@Connection';

export default async function GetTerpinjamMobil(dk: string, fetch: boolean) {

    console.log("GetDetailKD", fetch)

    if (fetch === false) {

        const dbconnection = Connection()
        let Select = "STR_PEMINJAM, STR_TGL, STR_STATUS"
        let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas_status` WHERE `STR_ID_KENDARAAN` = ?'
        let result: any = await dbconnection.promise().query(Query, [dk]);
        dbconnection.end();



        return result[0]


    } else {
        let URL = `http://0.0.0.0:3000/Api/KendaraanDinas/Pinjam/getTerpinjamMobil?dk=${dk}`
        let res = await GET(URL, false)

        return res.data
    }


}
