import { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [titleInput, setTitleInput] = useState('');
  const [fileInput, setFileInput] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!titleInput.trim() || !fileInput) {
      alert("Please provide both a title and an image file.");
      return;
    }

    const localImageUrl = URL.createObjectURL(fileInput);

    onAddPost({
      url: localImageUrl,
      title: titleInput.trim(),
    });

    setTitleInput('');
    setFileInput(null);
    e.target.reset();
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleFormSubmit} className="upload-form">
        <h3>Create a New Post</h3>
        <div className="form-group">
          <input
            type="text"
            id="post-title"
            placeholder="Enter a descriptive title..."
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            id="post-image"
            accept="image/*"
            onChange={(e) => setFileInput(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        <button type="submit" id="post-btn" className="btn primary">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;