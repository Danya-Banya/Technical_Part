export const ImageCard = ({ image }) => {
  return (
    <div className="imageCard">
      <img className="imageCard_img" src={image.url} alt="" />
    </div>
  );
};
