#Social Barometer Web App

The web app for the project Social Barometer lives here.

## Usage

1) Clone the repo
2) `npm install`
3) `npm run dev`
4) Open http://localhost:3000/

### Secrets
In order for Google Maps to work add a secrets.json file to repo root with the following property:
```json
{
  "googleMapsAPIKey": "<insert api key here>"
}
```

### To run with scraper
1) Open a new terminal window
2) Clone the scraper to a safe location:
`git clone https://github.com/social-barometer/scraper.git`
3) `cd scraper`
4) `npm install`
5) `node index`