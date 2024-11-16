import React from 'react';
import IdeasTemplate from './_IdeasTemplate';

export const ideaMetadata = {
  title: 'Samplest - App for deconstructing and creating playlists from songs',
  description: `This app will listen to songs using Shazam to identify the song, and then create an iTunes playlist of the original samples that were used to make the song. There should also be a search function so the user can find a song by title or artist. The playlist should include the song title and all of the samples. If the search isn’t too recursive, any other song that sampled the original should be selectable to add to the playlist. The focus should be on iTunes APIs, although Spotify would work if it's easier.`,
  checklist: [
    'Use Shazamkit to identify original song',
    'Search sample libraries to determine samples',
    'Build playlist using iTunes or Spotify',
    'Song histories',
    'Related songs',
    'Covers',
    'Purchase?',
  ],
  link: '/ideas/samplest',
  type: 'App', // Added type property
};

const Samplest = () => {
  return (
    <IdeasTemplate
      title={ideaMetadata.title}
      description={ideaMetadata.description}
      checklist={ideaMetadata.checklist}
    />
  );
};

export default Samplest;
