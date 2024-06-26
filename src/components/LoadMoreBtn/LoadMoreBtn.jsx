const LoaderMoreBtn = ({ onLoadMore }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onLoadMore();
      }}
    >
      Load more
    </button>
  );
};

export default LoaderMoreBtn;
