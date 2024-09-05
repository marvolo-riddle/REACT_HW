import Form from "./components/Forms/Form.jsx";
import List from "./components/List/List.jsx";
import EditForm from "./components/Forms/EditForm.jsx";
import { useState } from "react";
import {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from "./store/apiSlice/apiSlice.js";

const App = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const { data: posts, isLoading, isError } = useGetPostsQuery();
  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetPostQuery(id, {
    skip: id === null,
  });

  const [addPost] = useAddPostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const handleSubmit = async (values) => {
    try {
      const result = await addPost(values).unwrap();
      console.log("Добавленный пост:", result);
    } catch (error) {
      console.error("Не удалось отправить форму: " + error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id).unwrap();
    } catch (error) {
      console.error("Не удалось удалить пост: " + error);
    }
  };

  const showPost = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setId(null);
  };

  const handleUpdatePost = async () => {
    if (post) {
      try {
        await updatePost(post).unwrap();
        console.log("Пост обновлён");
        handleClose();
      } catch (error) {
        console.error("Не удалось обновить пост: " + error);
      }
    } else {
      console.log("Ошибка при загрузке поста:", isPostError);
    }
  };

  if (isLoading) {
    return <div>Данные загружаются...</div>;
  }
  if (isError) {
    return <div>Ошибка при загрузке данных.</div>;
  }

  return (
    <div>
      {open && post && !isPostLoading ? (
        <EditForm
          open={open}
          post={post}
          onClose={handleClose}
          handleChange={handleUpdatePost}
        />
      ) : (
        <div>
          <Form onSubmit={handleSubmit} />
          <List posts={posts} deleteItem={handleDelete} editItem={showPost} />
        </div>
      )}
    </div>
  );
};

export default App;
