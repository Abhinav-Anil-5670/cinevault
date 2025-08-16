# CineVault

CineVault is a web application that provides detailed information about movies, TV shows, and celebrities.  
It uses the [TMDb API](https://www.themoviedb.org/documentation/api) to fetch real-time data such as trending titles, popular picks, and individual details.

---

## Features

- **Movies & TV Shows**
  - Browse a complete list of movies and TV shows.
  - Trending section with a **drop-down menu** to filter between movies and shows.
  - Popular section highlighting widely liked titles.
  - Dedicated detail pages for each movie and TV show.
  - Watch trailers on a separate page with a single click.
  - External links available for **IMDb**, **Wikidata**, and the movie/TV show’s **official website**. 

- **Celebrities**
  - Browse a list of celebrities.
  - Individual detail pages with specific information when clicked.
  - External links available for **Instagram**, **Facebook**, and **Twitter**.

- **Search**
  - Global search bar to find movies, TV shows, or celebrities.
  - Clicking a result navigates directly to its details page.

- **UI Features**
  - Dynamic header image that updates with the currently popular movie/show.

---

## Tech Stack

- **Frontend:** Vite + JavaScript/React (if applicable)
- **API:** TMDb API
- **Styling:** (Add framework here if you used one, e.g. TailwindCSS, plain CSS, etc.)

⚠️ **Note:** This project is currently **not responsive**.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the project root and add your TMDb API authorization key:
   ```bash
   VITE_AUTHORIZATION=""
4. Run the project:
   ```bash
   npm run dev

## Future Improvements
- Add responsiveness for mobile/tablet devices.
- Improved trailer playback experience.

## License
This project is for educational purposes only.
All data is provided by [TMDb](https://www.themoviedb.org/).
