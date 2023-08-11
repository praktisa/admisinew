import Connection from '@Connection';



export default async function GetListKD() {


    const dbconnection = Connection()
    let Select = "ID"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas`'
    let result: any = await dbconnection.promise().query(Query);
    dbconnection.end();

    return result[0]

}