import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://media.istockphoto.com/photos/page-not-found-picture-id180710296?k=6&m=180710296&s=612x612&w=0&h=L_ae3oLwXjy8ROn9ZgWwPGuA8bDduCXfI5CxrPEu40o="
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{height:'300px'}}
          />
          <div className="card-body ">
            <h5 className="card-title">
              {title}{" "}
              <span
                className="position-absolute top-0 translate-middle badge rounded-pill bg-success"
                style={{ left: "80%", zIndex: "1" }}
              >
                {" "}
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
