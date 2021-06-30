export class Podcast {
    constructor(public id: number, public title: string, public description: string, public url: string) {
    }
  }

  export class Episode {
    constructor(public id: number, public title: string, public duration: number, public url: string) {
    }
  }

  export class Track {
    constructor(public id: number, public title: string, public preview: string) {
    }
  }
  