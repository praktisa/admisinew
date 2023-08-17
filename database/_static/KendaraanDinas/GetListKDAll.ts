import GET from '@/database/Method/GET';
import Connection from '@Connection';

export default async function GetListKDAll(fetch: boolean) {

    console.log("GETLIST KD ALL", fetch)

    if (fetch === false) {
        const dbconnection = Connection()
        let Select = "ID, STR_NAMA, STR_PLAT, STR_IMG"
        let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas`'
        let result: any = await dbconnection.promise().query(Query);
        dbconnection.end();
        return result[0]


    } else {
        let URL = 'http://0.0.0.0:3000/Api/KendaraanDinas/GetListKDAll'
        let res = await GET(URL, false)

        return res.data
    }


}
