import "./index.css";
interface IImageHover {
  img: string;
  hoverText: string;
  imageHeight: string;
}
const ImageHover = (data: IImageHover) => {
  return (
    <div className="image-hover-container">
      <img
        src={data.img}
        style={{ borderRadius: "10px", height: data.imageHeight }}
      />
      <div className="hover-opacity" style={{ height: data.imageHeight }}></div>
      <div className="hovered-text" style={{ height: data.imageHeight }}>
        <p>{data.hoverText}</p>
        <p>MORE INFO</p>
      </div>
    </div>
  );
};
export default ImageHover;
