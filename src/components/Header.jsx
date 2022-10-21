import React, { useEffect, useState } from "react";

export function Header({ scoreBoard, bestScore }) {

  return (
    <div className="header">
      <div>Score: {scoreBoard} </div>
      <div>Best score: {bestScore} </div>
    </div>
  );

}