import React from 'react';

interface song {
    id: number,
    title: string,
    artist: string,
    nativeTitle: string,
    youtubeLink: string,
    lyrics: string
}

type Props = {
    songObject: song
}

function Song({songObject}: Props){

    return (
        <div className='bg-red-500 w-full my-2 p-2 grid grid-cols-5 grid-rows-4 rounded-md'>
            <span className='row-start-1 col-start-1 col-span-3'>
                {songObject.title}
            </span>
            <span className='row-start-1 col-start-4 col-span-2'>
                ID: {songObject.id}
            </span>
            <span className='row-start-2 col-start-1 col-span-3'>
                {songObject.nativeTitle}
            </span>
            <span className='row-start-3 col-start-1 col-span-3'>
                {songObject.artist}
            </span>

            <span className='row-start-4 col-start-1 col-span-2'>
                <a href={songObject.youtubeLink}>Youtube</a>
            </span>

            <span className='row-start-4 col-start-3 col-span-2'>
                <a href={songObject.lyrics}>Lyrics</a>
            </span>
        </div>
    )
}

export default Song;