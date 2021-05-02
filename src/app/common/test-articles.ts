export class TestArticles {
  public link: string;
  public img: string;
  public sport: string;
  public date: string;
  public desc: string;
  public content: string;
  constructor(
    link: string,
    img: string,
    sport: string,
    date: string,
    desc: string,
    content: string
  ) {
    this.link = link;
    this.img = img;
    this.sport = sport;
    this.date = date;
    this.desc = desc;
    this.content = content;
  }
}