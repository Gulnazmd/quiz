import React from "react";
import Button from "./UI/button";

const Card = (props) => (

  <div className="flex justify-center p-8 mt-4">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      {props.children}
      </div>
</div>

)

export default Card;