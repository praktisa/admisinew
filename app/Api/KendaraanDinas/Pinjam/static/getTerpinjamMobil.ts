import Connection from '@Connection';

export default async function getTerpinjamMobil(dk: any) {


    const dbconnection = Connection()
    let Select = "STR_PEMINJAM, STR_TGL, STR_STATUS"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas_status` WHERE `STR_ID_KENDARAAN` = ?'
    let result: any = await dbconnection.promise().query(Query, [dk]);

    dbconnection.end();

    return result[0][0]
}
