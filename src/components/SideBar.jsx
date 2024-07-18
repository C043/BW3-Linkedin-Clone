import { Pencil } from "react-bootstrap-icons";

import SimilarProfiles from "./SimilarProfiles";
import FriendsRecommended from "./FriendsRecommended";

const SideBar = () => {
  return (
    <>
      <div className=" border rounded-4 bg-white mt-3 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="h6">Lingua del profilo</h4>
          <Pencil size={15} />
        </div>
        <p className="text-secondary">Italiano</p>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="h6">Profilo pubblico e URL</h4>
          <Pencil size={15} />
        </div>
        <p className="text-secondary">www.linkedin.com/in/mario-fragnito-b21ba624a</p>
      </div>

      <SimilarProfiles />
      <FriendsRecommended />
    </>
  );
};

export default SideBar;
