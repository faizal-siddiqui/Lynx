import { StarIcon } from "@chakra-ui/icons";
import { Alert, Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AlertMessage from "./AlertMessage";

const RateStar = ({ maxRating, selectedRating, setSelectedRating, UpdateStar}) => {
  const [hoverState, setHoverState] = useState(0);
  const newState = hoverState ? hoverState : selectedRating;
  const {id} = useParams()

  const renderStar = () => {
    const starToRender = [];
    for (let i = 0; i < maxRating; i++) {
      starToRender.push(
        <span
          Key={Math.random()*0.365*Math.random()}
          onMouseOver={() => setHoverState(i + 1)}
          onMouseLeave={() => setHoverState(0)}
          onClick={() =>{
            UpdateStar(id)
            setSelectedRating(i + 1)
          }
          }
        >
          <StarIcon
            fontSize="25px"
            ml="7px"
            color={i < newState ? "#14958f" : "teal.100"}
          />
        </span>

      );
    }
    return starToRender;
  };

  return <Box>{renderStar()}
  </Box>;
};

export default RateStar;
