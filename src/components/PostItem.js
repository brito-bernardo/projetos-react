import React, { useState } from "react";

function PostItem({ name, text, image, hoverImage }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="postItem">
      <div
        className={`postItem__image ${isHovering ? "hover" : ""}`}
        style={{
          backgroundImage: isHovering ? `url(${image})` : `url(${hoverImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          transition: "background-image 0.1s ease-in-out",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h1 className="postItem__title">{name}</h1>
        <p className="postItem__text">{text}</p>
      </div>
    </div>
  );
}

export default PostItem;

