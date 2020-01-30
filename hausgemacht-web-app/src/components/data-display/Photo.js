import React from "react";
import { Empty } from "antd";

export default ({ photoURL }) =>
  photoURL ? (
    <img
      src="photoURL"
      alt={`unter dieser Url leider kein Bild gefunden`}
    ></img>
  ) : (
    <Empty description="noch kein Bild hochgeladen."></Empty>
  );
