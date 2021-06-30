import {Episode, Podcast, Track} from './deezer.model'; //Podcast equivalent de Podcasts
//Titre equivalent de drink
//Playlist de cocktails

export interface Data {
  id: number;
  title: string;
  description: string;
  picture_big : string;
}

export interface Data2 {
  id: number;
  title: string;
  duration: number;
  picture : string;
}

export interface Data3 {
  id: number;
  title: string;
  preview : string;
}

const rootEndpoint = 'https://api.deezer.com/search/podcast'; //lien de l'API

const headers = {
  "Content-Type" : "application/json",
  Accept: "application/json"
};

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

class Deezerdbapi {
  searchDatabyWord(word: string) : Promise<Array<Podcast>> {
    return this.fetchFromApi(`${rootEndpoint}?q=${word.trim()}`).then((datas) => 
    this.createPodcasts(datas));
  }

  private fetchFromApi(text: string): Promise<Array<Data>> {
    return (
      fetch(text, requestOptions)
        .then(response => response.json())
        .then((jsonResponse) => jsonResponse.data || [])
        .catch((error) => {console.log('error', error);
        })
    );
  }

  private fetchbyIDPodcast(text: string): Promise<Array<Data2>> {
    return (
      fetch(text, requestOptions)
        .then(response => response.json())
        .then((jsonResponse) => jsonResponse.data || [])
        .catch((error) => {console.log('error', error);
        })
    );
  }

  private fetchExampleTrack(text: string) {
    return (
      fetch(text, requestOptions)
        .then(response =>  response.json())
        .then((jsonResponse) => jsonResponse || {})
        .catch((error) => {console.log('error', error);
        })
    );
  }
 
  private createPodcast(data: Data) {
    return new Podcast(data.id, data.title, data.description, data.picture_big);
  }

  private createPodcasts(datas: Array<Data>): Array<Podcast> {
    // Create cocktails
    return datas.map((data) => this.createPodcast(data));
  }

  private createEpisode(data: Data2) {
    return new Episode(data.id, data.title, data.duration, data.picture);
  }

  private createEpisodes(datas: Array<Data2>): Array<Episode> {
    // Create cocktails
    return datas.map((data) => this.createEpisode(data));
  }

  public findPodcastById(id:number) : Promise<Array<Episode>> {
    return this.fetchbyIDPodcast(`https://api.deezer.com/podcast/${id}/episodes`).then((datas) => this.createEpisodes(datas));
    }


      private createTrack(data: Data3) {
        return new Track(data.id, data.title, data.preview);
      }

      public ExampleforTrack() : Promise<Track> {
        return this.fetchExampleTrack(`https://api.deezer.com/track/1109737`).then((datas) => this.createTrack(datas));
        }
}


export default new Deezerdbapi();

