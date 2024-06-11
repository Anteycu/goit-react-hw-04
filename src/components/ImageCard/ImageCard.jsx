import css from "./ImageCard.module.css";

const ImageCard = ({ imgInfo, onModalPhoto }) => {
  const { alt_description, urls, description, tags, width, height } = imgInfo;
  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          onModalPhoto(imgInfo);
        }}
        title={description}
        className={css.cardImg}
      />
      <p>
        {width}x{height}
      </p>
      <ul className={css.tagsList}>
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
