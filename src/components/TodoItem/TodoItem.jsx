import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { StyledSelect, StyledButton } from "./style/index.jsx";
import { Link } from "react-router-dom";

const TodoItem = ({
  id,
  title,
  descriptions,
  deleteItem,
  selectChange,
  showItem,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {id + ". " + title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h6" component="div">
          {descriptions}
        </Typography>
      </CardContent>

      <CardActions>
        <div>
          <Button color="secondary" onClick={() => deleteItem(id)}>
            Удалить
          </Button>
          <StyledButton>
            <Link to={`/item/${id}`} name={String(id)} onClick={showItem}>
              Посмотреть
            </Link>
          </StyledButton>
          <StyledSelect
            labelId="status-select-label"
            name={String(id)}
            defaultValue="in_progress"
            onChange={selectChange}
            label="Статус"
          >
            <MenuItem value="completed">Завершено</MenuItem>
            <MenuItem value="not_completed">Не завершено</MenuItem>
            <MenuItem value="in_progress">В процессе</MenuItem>
          </StyledSelect>
        </div>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
