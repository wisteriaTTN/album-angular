export class Photo {
  caption : string;
  src: string;
  thumb: string;

  constructor(caption : string, src: string, thumb: string) {
    this.caption  = caption;
    this.src = src;
    this.thumb = thumb;
  }
}
