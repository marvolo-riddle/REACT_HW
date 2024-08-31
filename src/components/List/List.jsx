//добавить каждому кнопку посмотреть и вытянуть функцию
import Item from "../Item/Item";

const List = ({ contacts, editItem, deleteItem }) => {
  // console.log("Current contacts state:", contacts);
  return (
    <div>
      {contacts.map((contact) => (
        <Item
          key={contact.id}
          contact={contact}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default List;
