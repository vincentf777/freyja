import ena from './ena';
import {query as q} from 'faunadb';

export async function getSongList() {
    const songList = await ena.query(
        q.Map(
            q.Paginate(q.Match(q.Index('all_Songs'))),
            q.Lambda(x => q.Get(x))
        )
    );
    return songList;
}