import { toast } from "react-toastify";

const TreeInfo = ({ point }: any) => {
  const handleClick = () => {
    toast.success("Поздравляю! Вы посадили дерево!");
  };

  return (
    <div className="info-window">
      <h3 className="info-title">Tree Info</h3>
      <div className="info-content">
        <h2>Place Name: {point.name}</h2>
        <p className="info-description">
          Brief description of the place or any interesting details that
          visitors might want to know.
        </p>
        <hr className="info-hr" />
        <p className="info-detail">
          <strong>Address:</strong> Street Name, City, Country
        </p>

        <form className="info-form" style={{ marginBottom: "16px" }}>
          <label htmlFor="file_input" className="info-label">
            Upload image
          </label>
          <p id="file_input_help" className="info-help-text">
            SVG, PNG, JPG or GIF (MAX. 800x600px).
          </p>
          <input id="file_input" type="file" className="info-input" />
        </form>
        <div style={{ marginTop: "16px" }}>
          <button className="info-button" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreeInfo;
