import Logout from "../Auth/Login/Client/C_login";
import C_NavContainer from "./v1/C_NavContainer";
import S_NavContainer from "./v1/S_NavContainer";


export default function Navigator({ }) {
    return (
        <>

            <S_NavContainer logout={<Logout />} >
                <C_NavContainer />
            </S_NavContainer>
        </>
    )
}
