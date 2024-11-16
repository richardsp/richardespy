import React from 'react';
import IdeasTemplate from './_IdeasTemplate';

export const ideaMetadata = {
    title: 'Improvement for trip planning on mapping applications',
    description: (
      <>
        <p>When creating a multipart trip and/or a trip longer than an hour, it would be nice to be able to scroll through the trip by time, and add points of interest that way.</p>
        <p>For example, if I'm driving from Los Angeles to San Francisco, I know that I'll want to stop and grab a bite about two hours into the trip. I would like to scroll my route by two hours,  then search in the area where I will be for a restaurant. The app should update the route and travel time appropriately.</p>
      </>
    ),
    link: '/ideas/tripplanner',
    type: 'App',
  };
  

const TripPlanner = () => {
  return (
    <IdeasTemplate
      title={ideaMetadata.title}
      description={ideaMetadata.description}
      checklist={ideaMetadata.checklist}
    />
  );
};

export default TripPlanner;
