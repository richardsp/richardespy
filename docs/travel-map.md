# Travel map tiles

The Travel page uses OpenStreetMap standard tiles by default. No API key is
required. Attribution stays visible, and the browser handles tile caching.
This service is intended for normal interactive viewing, not bulk downloads:
https://operations.osmfoundation.org/policies/tiles/

To use the original CARTO Voyager style:

1. Request a free basemap key at https://carto.com/basemaps/apikey/.
2. Restrict the browser key to your site's domains in CARTO's dashboard.
3. Set `REACT_APP_CARTO_BASEMAP_API_KEY` in Netlify's environment variables
   for the build context that needs it, then rebuild and deploy the site.
   For local development, set it in the git-ignored `.env.local` file and
   restart the development server.

Create React App embeds this browser key in the public JavaScript bundle;
use a domain-restricted basemap key, not a private CARTO account credential.
Removing the variable and rebuilding switches back to OpenStreetMap.
An invalid or expired configured key must be replaced or removed.
