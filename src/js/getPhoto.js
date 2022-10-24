import axios from 'axios';

const BASE_URL = `https://pixabay.com/pi/`;
const KEY = `30771927-0f20ce8e9e9263a99f3dfe8b1`;
const IMAGE_TYPE = `photo`;
const ORIENTATITON = `"horizontal"`;
const SAFESEARCH = `"true"`;
const per_page = `40`;

export async function getPhoto(photoName, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${photoName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATITON}&safesearch=${SAFESEARCH}&page=${page}&per_page=${per_page}`
    );
    return response.data;
  } catch (error) {
    console.error(Notify.failure('${error}'));
  }
}
