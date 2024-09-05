import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const Item = ({ post, editItem, deleteItem }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {"user" + " " + post.userId}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h6" component="div">
          {post.title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h6" component="div">
          {post.body}
        </Typography>
      </CardContent>

      <CardActions>
        <div>
          <Button color="secondary" onClick={() => deleteItem(post.id)}>
            Удалить
          </Button>
          <Button color="primary" onClick={() => editItem(post.id)}>
            Редактировать
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Item;
