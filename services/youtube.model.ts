export default class YoutubeVideo {
  constructor(
    public id: string,
    public snippet: string,
    public description: string,
    public thumbnails: string
  ) {}
}
