// import ImageModal from "../ImageModal/ImageModal";
const ImageCard = ({ imgInfo, imgInfoHandler }) => {
  const { alt_description, urls, description, tags, width, height } = imgInfo;
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          imgInfoHandler(imgInfo);
        }}
      />
      <p>
        {width}x{height}
      </p>
      <p>{description ? description : "Imagine here best description ever"}</p>
      <ul>
        {tags.map(({ title }, index) => {
          return (
            <li key={index}>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
      {/* <a href={links.download} type="image">
        Download
      </a> */}
    </div>
  );
};

export default ImageCard;
