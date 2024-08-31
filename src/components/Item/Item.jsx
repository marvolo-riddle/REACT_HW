import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ contact, editItem, deleteItem }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {contact.id + ". " + contact.name}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h6" component="div">
          {contact.number}
        </Typography>
      </CardContent>

      <CardActions>
        <div>
          <Button color="secondary" onClick={() => deleteItem(contact.id)}>
            Удалить
          </Button>
          <Button color="primary" onClick={() => editItem(contact.id)}>
            Редактировать
            {/*  добавить функцию*/}
          </Button>
          <Button onClick={() => editItem(contact.id)}>
            <Link to={`/item/${contact.id}`}>Посмотреть</Link>
            {/*  добавить стиль на ссылку */}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Item;
