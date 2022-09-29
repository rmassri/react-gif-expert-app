export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?apikey=piMyVWetB7opJgk39YXN2FX83n5yJZgE&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const result = data.map((element) => ({
    id: element.id,
    title: element.title,
    url: element.images.downsized_medium.url,
  }));
  return result;
};
