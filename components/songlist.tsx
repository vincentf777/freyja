import React, { useState, useEffect } from 'react';
import Song from './song';

const dummySongData = [
    {id: 1,
    title: 'song 1',
    artist: 'artist 1',
    nativeTitle: 'native title 1',
    youtubeLink: 'youtube link 1',
    lyrics: 'lyrics 1'},
    {id: 2,
    title: 'song 2',
    artist: 'artist 2',
    nativeTitle: 'native title 2',
    youtubeLink: 'youtube link 2',
    lyrics: 'lyrics 2'},
    {id: 3,
    title: 'song 3',
    artist: 'artist 3',
    nativeTitle: 'native title 3',
    youtubeLink: 'youtube link 3',
    lyrics: 'lyrics 3'},
    {id: 4,
    title: 'song 4',
    artist: 'artist 4',
    nativeTitle: 'native title 4',
    youtubeLink: 'youtube link 4',
    lyrics: 'lyrics 4'}
]

interface song {
    id: number,
    title: string,
    artist: string,
    nativeTitle: string,
    youtubeLink: string,
    lyrics: string
}

function SongList(){
    const [songs, setSongs] = useState(dummySongData)

    useEffect(() => {
    }, [])

    function getNewSongs(){
        let newSongs = []
        for(let i = 0; i < 2; i++){
            let temp = dummySongData[Math.floor(Math.random() * dummySongData.length)]
            console.log(temp)
            newSongs.push(temp)
        }
        console.log(newSongs)
        setSongs(newSongs)
    }

    const songElements = songs ? songs.map((songObject: song) => 
        <Song key={songObject.id} songObject={songObject}/>
    ) : <div/>

    return (
        <div className='font-light justify-center place-content-center w-1/2'>
            {songElements}
        </div>
    )
}

export default SongList;