import "./buttonBanner.css";

export const ButtonBanner = ({ buttonBanner, onClick }) => {
  return (
    <button className="BB" onClick={onClick}>
      {buttonBanner}
    </button>
  );
};
