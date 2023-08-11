import CC from './CarCard.module.css'
import ImageFill from '../../Image/ImageFill'
import Shimerloading from '../../loading/Shimerloading'

interface Card {
    name?: string,
    plat?: string,
    img?: string,
    seksi?: string,
    status?: string,
    loading?: boolean
}

interface Child {
    children: React.ReactNode
    loading: boolean
}


export default function CardKD({
    name = "Expander",
    plat = "DK 1206 XY",
    img = "",
    seksi = "",
    status = "Terpinjam",
    loading = false
}: Card) {

    function Status({ status, seksi }: any) {
        return (
            <>
                <div className={CC['Terpinjam']}>
                    <div>{status}</div>
                    {seksi}
                </div>
            </>
        )
    }

    function IsLoading({ loading, children }: Child) {

        return (
            <>
                {
                    loading === false
                        ?
                        children
                        :
                        <Shimerloading loop={0} />
                }
            </>
        )
    }

    return (

        <div className={CC['CardPosition']} id={plat}  >

            <div
                id={name}
                className={CC['CardLayout']}

            >
                <div className={CC['Layout__img']} >

                    {
                        seksi.length != 0 ? <Status status={status} seksi={seksi} /> : <></>
                    }

                    <IsLoading loading={loading}>
                        <ImageFill src={img} animated={false} quality={40} />
                    </IsLoading>

                    <div className={CC['Layout__act']} >
                        <div className={CC['Layout__CarName']} >
                            <span className={CC['CarName']} >
                                <IsLoading loading={loading}>
                                    <>{name}</>
                                </IsLoading>
                            </span>
                        </div>
                        <div className={CC['Layout__Button']} >
                            <div className={CC['CarPLAT']} >

                                <IsLoading loading={loading}>
                                    <>{plat}</>
                                </IsLoading>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
