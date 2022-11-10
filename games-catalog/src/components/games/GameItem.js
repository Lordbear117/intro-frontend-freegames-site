import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardAction from "@mui/material/CardActions";
// styles
import styles from "./GameItem.module.css";

const GameItem = ({ item: game }) => {
  return (
    <Link to={`/games/${game.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={game.thumbnail}
            alt="game image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p className={`${styles.description} text-muted`}>
                {game.short_description.substr(0, 70)}...
              </p>
            </Typography>
          </CardContent>
          <CardAction>
            <div>
              <span className={styles.badge}>{game.genre}</span>
              {game.platform.includes("PC (Windows)") ? (
                <AiFillWindows
                  className={styles.platform_icon}
                  title="Available on Windows"
                />
              ) : (
                <GoBrowser
                  className={styles.platform_icon}
                  title="Available on Browser"
                />
              )}
            </div>
          </CardAction>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default GameItem;
