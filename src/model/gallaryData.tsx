class gallaryData {
  id: string;
  title: string;
  owner: string;
  secret: string;
  server: string;
  fav:boolean;
  constructor(
    id: string,
    title: string,
    owner: string,
    secret: string,
    server: string,fav:boolean
  ) {
    this.title = title;
    this.id=id;
    this.owner = owner;
    this.secret= secret;
    this.server= server;
    this.fav = fav;
  }
}

export default gallaryData;
