import { Pencil } from "react-bootstrap-icons"

import SimilarProfiles from "./SimilarProfiles"



const SideBar = () => {
    return (
        <>
            <div className=" border rounded-4 bg-white mt-5 p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 >Lingua del profilo</h4>
                    <Pencil size={23} />
                </div>
                <p>Italiano</p>
            </div>

            <div className=" border rounded-4 bg-white mt-2 p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 >Profilo pubblico e URL</h5>
                    <Pencil size={23} />
                </div>
                <p>www.linkedin.com/in/mario-fragnito-b21ba624a</p>
            </div>

            <SimilarProfiles />
        </>
    )
}



export default SideBar