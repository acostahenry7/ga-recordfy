import React from "react";
import { Card } from "../Card";
import { CardHeader } from "../CardHeader";
import { CardBody } from "../CardBody";
import { FaTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { serverURL } from "../../utils/constants";

function FileCard({ data, handleRemove }) {
  const host = serverURL.slice(0, serverURL.lastIndexOf("/"));
  const path = data.source?.slice(data.source.indexOf("static"));

  return (
    <div id={data.record_file_id} className="Card">
      <FaTimesCircle
        onClick={(e) => {
          handleRemove();
        }}
        size={18}
        color="#ba1514"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          marginTop: -4,
          marginRight: -4,
        }}
      />
      <NavLink
        style={{ textDecoration: "none", color: "var(--text-black)" }}
        to={`${host}/${path}`}
        target="_blank"
      >
        <CardHeader>
          <p style={{ textTransform: "uppercase" }}>{data.file_type.name}</p>
          {/* <span>Exp. {data.expiration_date}</span> */}
        </CardHeader>
        <CardBody>
          <ul>
            <li>
              <span>Archivo</span>
              <span>{data.name}</span>
            </li>
            <li>
              <span>Subido en</span>
              <span>{new Date(data.created_at).toLocaleString("do-Es")}</span>
            </li>
            <li>
              <span>Fecha de emisión</span>
              <span>
                {data.doc_creation_date
                  ? new Date(data.doc_creation_date).toLocaleDateString("do-Es")
                  : "No aplica"}
              </span>
            </li>
            <li>
              <span>Fecha de expiración</span>
              <span>
                {data.expiration_date
                  ? new Date(data.expiration_date).toLocaleDateString("do-Es", {
                      timeZone: "UTC",
                    })
                  : "No expira"}
              </span>
            </li>
            <li>
              <span>Creado por</span>
              <span>{data.created_by}</span>
            </li>
          </ul>
        </CardBody>
      </NavLink>
    </div>
  );
}

export default FileCard;
