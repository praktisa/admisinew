import Connection from '@Connection';

export default async function GetListKDAll() {

    const dbconnection = Connection()
    let Select = "ID, STR_NAMA, STR_PLAT, STR_IMG"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas`'
    let result: any = await dbconnection.promise().query(Query);
    dbconnection.end();


    return result[0]

}
