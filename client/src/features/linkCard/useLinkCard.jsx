import { useLiveQuery } from 'dexie-react-hooks';
import { getAllLinks, deleteLink } from '../../lib/db';

export function useLinkCard() {
    return useLiveQuery(() => getAllLinks());
}

export function handleDelete(id) {
    return deleteLink(id)
}