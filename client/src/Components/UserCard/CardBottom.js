import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, CardActions } from "@mui/material";

export function CardBottom(props) {
  return (
    <CardActions
      sx={{
        marginBottom: "1vh",
        ml: "0.5vw",
        textAlign: "center",
      }}>
      <Button size="small" href={props.github}>
        <GitHubIcon />
      </Button>
      <Button size="small" href={props.twitter}>
        <TwitterIcon />
      </Button>
      <Button size="small" href={props.website}>
        <LanguageIcon />
      </Button>
    </CardActions>
  );
}
