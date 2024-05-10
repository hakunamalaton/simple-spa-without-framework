export class Post {
  constructor () {}

  setTitle () {
    document.title = 'Dashboard';
  }

  getHTML () {
    return `<div style="color: green;">Posts</div>`
  }
}
