import Connection from '@Connection';

export default async function getKendaraanByPlat(dk: string) {


    const dbconnection = Connection()
    let Select = "STR_NAMA, STR_PLAT, STR_IMG"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas` WHERE `ID` = ?'
    let result: any = await dbconnection.promise().query(Query, [dk]);

    dbconnection.end();


    return result[0][0]
}