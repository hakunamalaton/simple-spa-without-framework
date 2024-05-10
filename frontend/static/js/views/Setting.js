export class Setting {
  constructor () {}

  setTitle () {
    document.title = 'Dashboard';
  }

  getHTML () {
    return `<div style="color: blue;">Setting</div>`
  }
}
