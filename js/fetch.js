// fetch function, however I had to fetch individually for every page where the API was used, in order for me to set up an error message.

const url = "https://v2.api.noroff.dev/gamehub";

export async function fetchApi() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    // API v2 wraps the games in "data" and gives the image as an object
    const data = details.data.map((game) => ({ ...game, image: game.image.url }));

    return data;
  } catch (error) {
    console.log(error);
  }
}
