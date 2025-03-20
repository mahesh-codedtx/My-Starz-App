import "./index.css";
interface IButton {
  btnText: string;
  padding: "thick" | "thin";
}
const MyButton = ({ btnText, padding }: IButton) => {
  return (
    <>
      <div>
        <button
          className={`my-button ${
            padding === "thick" ? "padding-thick" : "padding-thin"
          }`}
        >
          {btnText}
        </button>
      </div>
    </>
  );
};
export default MyButton;
