import { NextRequest, NextResponse } from 'next/server'
import Connection from '@Connection';

export async function GET(request: NextRequest, response: NextResponse) {

    const { searchParams } = new URL(request.url)
    const dk = searchParams.get('dk')

    const dbconnection = Connection()
    let Select = "ID, STR_NAMA, STR_PLAT, STR_IMG"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas` WHERE `ID` = ?'
    let result: any = await dbconnection.promise().query(Query, [dk]);

    dbconnection.end();

    console.log("HASILNYA NIH BOS", result[0], dk)



    return NextResponse.json({ data: result[0][0] })

}