import React from 'react';
import IdeasTemplate from './IdeasTemplate';

export const ideaMetadata = {
  title: 'Chef Tracker - Find TV chefs restaurants and appearances',
  description: `Chef Tracker is an app that allows users to track chefs featured on various TV cooking shows. Users can search for chefs, restaurants, standout dishes, and more. This app will help food enthusiasts keep track of their favorite chefs, discover new talent, and visit their restaurants.`,
  checklist: [
    'Search for chefs by TV show, name, city, or restaurant',
    'Browse a list of chefs based on the network, such as Food Network, Cooking Channel, or Fox',
    'Detailed profiles of each chef, including information about their restaurants, cuisine, cost, and locations',
    'Track whether a restaurant is still open and when it was featured on TV',
    'Highlight standout dishes from each episode',
  ],
  link: '/ideas/cheftracker',
  type: 'App', // Added type property
};

const ChefTracker = () => {
  return (
    <IdeasTemplate
      title={ideaMetadata.title}
      description={ideaMetadata.description}
      checklist={ideaMetadata.checklist}
    />
  );
};

export default ChefTracker;
