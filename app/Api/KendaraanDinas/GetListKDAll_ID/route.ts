import { NextRequest, NextResponse } from 'next/server'
import GetListKDAll_ID from '@DB_KendaraanDinas/GetListKDAll_ID';



export async function GET(request: NextRequest, response: NextResponse) {


    let result = await GetListKDAll_ID(false)

    return NextResponse.json({ data: result[0] })

}