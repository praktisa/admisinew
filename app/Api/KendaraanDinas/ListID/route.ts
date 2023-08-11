import { NextRequest, NextResponse } from 'next/server'
import Connection from '@Connection';



export async function GET(request: NextRequest, response: NextResponse) {


    const dbconnection = Connection()
    let Select = "ID"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas`'
    let result: any = await dbconnection.promise().query(Query);
    dbconnection.end();

    return NextResponse.json({ data: result[0] })

}