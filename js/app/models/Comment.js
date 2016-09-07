function Comment (responseJSON) {
  this.by = responseJSON.by;
  this.kids = responseJSON.kids;
  this.parent = responseJSON.parent;
  this.text = responseJSON.text;
  this.time = responseJSON.time;
  this.type = responseJSON.type;
}
