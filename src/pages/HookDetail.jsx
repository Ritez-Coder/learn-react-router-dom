import React from "react";
import { hooks } from "../hooks";
import { useNavigate, useParams } from "react-router";

function HookDetail() {
  const { hookID } = useParams();
  const { name, desc, img } = hooks[hookID];
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
     Go Back
      </button>
      <h2 className="text-center">{name} Hook</h2>
      <div className="detail-card">
        <p>{desc}</p>
        <img src={`${img}`} alt="" />
      </div>
      <br />
    </div>
  );
}

export default HookDetail;
