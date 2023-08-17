import GET from '@/database/Method/GET';
import Connection from '@Connection';

export default async function GetDetailKD(dk: string, fetch: boolean) {

    console.log("GetDetailKD", fetch)

    if (fetch === false) {

        const dbconnection = Connection()
        let Select = "STR_NAMA, STR_PLAT, STR_IMG"
        let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas` WHERE `ID` = ?'
        let result: any = await dbconnection.promise().query(Query, [dk]);

        dbconnection.end();



        return result[0][0]


    } else {
        let URL = 'http://0.0.0.0:3000/Api/KendaraanDinas/GetDetailKD'
        let res = await GET(URL, false)

        return res.data
    }


}
