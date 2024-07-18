const JobComponent = ({ url, title, company, category, description, date }) => {
  return (
    <div className="d-flex flex-column">
      <a href={url} className="h4 link-underline link-underline-opacity-0">
        {title}
      </a>
      <p className="m-0">{date}</p>
      <a className="h5 link-underline link-underline-opacity-0">{company}</a>
      <a className="h6 link-underline link-underline-opacity-0">{category}</a>
      <p className="text-truncate m-0">{description}</p>
    </div>
  );
};

export default JobComponent;
