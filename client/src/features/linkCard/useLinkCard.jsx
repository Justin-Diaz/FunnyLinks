import { useLiveQuery } from "dexie-react-hooks";
import { getLinks, deleteLink, createLink, updateLink } from "../../lib/db";

export default function useLinkCard() {
  const links = useLiveQuery(() => getLinks(), []);

  const handleCreate = async (url) => {
    await createLink(url);
  };

  const handleUpdate = async (id, data) => {
    await updateLink(id, {
      title: data.title,
      description: data.description
    });
  };

  const handleDelete = async (id) => {
    await deleteLink(id);
  };

  return { links, handleCreate, handleUpdate, handleDelete };
}
