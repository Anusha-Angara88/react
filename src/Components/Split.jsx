import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Split() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className="split-container">
      <div className="left"></div>
      <div className="right"></div>
      <h1 className="split-text">Welcome!</h1>
    </div>
  );
}

export default Split;
