import React from "react";
import { submitPortfolioForm } from "../action";

const PortfolioForm = () => {
  return (
    <form action={submitPortfolioForm}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input name="title" type="text" className="form-control" id="title" />
      </div>

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <input name="type" type="text" className="form-control" id="type" />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <input
          name="content"
          type="text"
          className="form-control"
          id="content"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">status</label>
        <input name="status" type="text" className="form-control" id="status" />
      </div>

      <div className="form-group">
        <label htmlFor="techstack">techstack</label>
        <input
          name="techstack"
          type="text"
          className="form-control"
          id="techstack"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imgUrl">imgUrl</label>
        <input
          name="imgUrl"
          type="text"
          className="form-control"
          id="imgUrl"
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="githubUrl">githubUrl</label>
        <input
          name="githubUrl"
          type="text"
          className="form-control"
          id="githubUrl"
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>{/* Date picker here */}</div>
      </div>

      <div className="form-group">
        <label htmlFor="street">End Date</label>
        <div>{/* Date picker here */}</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
