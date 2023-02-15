import React from "react";
import { hooks } from "../hooks";
import { useNavigate, useParams } from "react-router";

function HookDetail() {
  const { hookID } = useParams();
  const { name, desc, img } = hooks[hookID];
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="text-center">{name} Hook</h2>
      <div className="detail-card">
        <p>{desc}</p>
        <img src={`${img}`} alt="" />
        <button onClick={() => navigate("/hooks")}>go back</button>
      </div>
    </div>
  );
}

export default HookDetail;
