import axios from "axios";
import YoutubeVideo from "./youtube.model";

const rootEndpoint = "https://www.googleapis.com/youtube/v3/";

const KEY = ; //You should use your own API KEY

export interface Video {
  id: string;
  snippet: string;
}

export default axios.create({
  baseURL: rootEndpoint,
  params: {
    part: "snippet",
    maxResults: 2,
    key: KEY,
  },
});

export function createYoutubeVideo(video: Video) {
  return new YoutubeVideo(
    video.id["videoId"],
    video.snippet["title"],
    video.snippet["description"],
    video.snippet["thumbnails"]["high"]
  );
}

export function createYoutubeVideos(videos: Array<Video>): Array<YoutubeVideo> {
  return videos.map((video) => createYoutubeVideo(video));
}
