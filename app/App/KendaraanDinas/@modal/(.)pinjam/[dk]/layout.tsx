
import Blur from '@/components/Modals/BasicModal/Blur/Blur'
import BlurContainer from '@/components/Modals/BasicModal/Container/BlurContainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admisi | TURT',
    description: 'Kendaraan Dinas',
}

interface children {
    children: React.ReactNode

}



export default function LayoutPinjam({ children }: children) {


    return (
        <>
            <Blur>
                <BlurContainer>
                    {children}
                </BlurContainer>
            </Blur>

        </>


    )
}
