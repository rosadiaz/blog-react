import React from "react";

const PostForm = props => {
  console.log(props)
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      content: formData.get("content")
    });
  };

  return (
    <form className="PostForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" />
      </div>
      <div>
        <label htmlFor="content">Content</label> <br />
        <textarea name="content" id="content" cols="60" rows="4" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default PostForm;