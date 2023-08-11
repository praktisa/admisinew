import Layout_KendaraanDinas from '@/content/KendaraanDinas/S_KendaraanDinas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admisi | TURT',
    description: 'Kendaraan Dinas',
}

interface children {
    children: React.ReactNode
    modal: React.ReactNode
}

// Riwayat Pararel
// Pinjam Intercept

export default function KendaraanDinasLayout(props: children) {


    return (
        <>
            <h1>Kendaraan Dinas</h1>

            {props.modal}


            <Layout_KendaraanDinas>
                {props.children}
            </Layout_KendaraanDinas>



        </>


    )
}
