import React from 'react';
import IdeasTemplate from './IdeasTemplate';

export const ideaMetadata = {
  title: 'Samplest',
  description: `This app will listen to songs using Shazam to identify the song, and then create an iTunes playlist of the original samples that were used to make the song. There should also be a search function so the user can find a song by title or artist. The playlist should include the song title and all of the samples. If the search isn’t too recursive, any other song that sampled the original should be selectable to add to the playlist. The focus should be on iTunes APIs, although Spotify would work if it's easier.`,
  checklist: [
    'Connect Xcode to GitHub',
    'Create GitHub project',
    'Watch Shazamkit content (https://developer.apple.com/videos/play/wwdc2021/10044/)',
    'Import Shazamkit',
    'Check Apple Music SDK',
    'Check Spotify SDK',
    'Look at iTunes APIs',
    'Find sample libraries',
    'Song histories',
    'Related songs',
    'Covers',
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
