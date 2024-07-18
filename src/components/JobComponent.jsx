const JobComponent = ({ url, title, company, category, date }) => {
  return (
    <div className="d-flex flex-column my-4">
      <a href={url} className="h4 link-underline link-underline-opacity-0">
        {title}
      </a>
      <p className="m-0">{date}</p>
      <a type="button" className="h6 link-underline link-underline-opacity-0">
        <span className="text-secondary">Company:</span> {company}
      </a>
      <a type="button" className="h6 link-underline link-underline-opacity-0">
        <span className="text-secondary">Category:</span> {category}
      </a>
    </div>
  );
};

export default JobComponent;
