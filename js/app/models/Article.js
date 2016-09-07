function Article (responseJSON) {
  this.by = responseJSON.by;
  this.id = responseJSON.id;
  this.kids = responseJSON.kids;
  this.score = responseJSON.score;
  this.time = responseJSON.time;
  this.title = responseJSON.title;
  this.type = responseJSON.type;
  this.url = responseJSON.url;
}
