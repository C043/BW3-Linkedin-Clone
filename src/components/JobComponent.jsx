import { useDispatch } from "react-redux";
import {
  getJobsAction,
  selectedJobHeaderAction,
  selectJobAction,
  selectJobDesAction,
  showCompanyDestOnAction,
} from "../redux/actions";

const JobComponent = ({ title, company, category, date, description }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(showCompanyDestOnAction());
    dispatch(selectJobAction(title));
    dispatch(selectJobDesAction(description));
  };

  const getCompanyJobs = () => {
    dispatch(getJobsAction(null, company, null));
    dispatch(selectedJobHeaderAction("Company: " + company));
  };

  const getCategoryJobs = () => {
    dispatch(getJobsAction(null, null, category));
    dispatch(selectedJobHeaderAction("Category: " + category));
  };

  return (
    <div className="d-flex flex-column my-4">
      <h3 type="button" className="h4 link-underline link-underline-opacity-0" onClick={handleOpen}>
        {title}
      </h3>
      <p className="m-0">{date}</p>
      <a type="button" className="h6 link-underline link-underline-opacity-0" onClick={getCompanyJobs}>
        <span className="text-secondary">Company:</span> {company}
      </a>
      <a type="button" className="h6 link-underline link-underline-opacity-0" onClick={getCategoryJobs}>
        <span className="text-secondary">Category:</span> {category}
      </a>
    </div>
  );
};

export default JobComponent;
