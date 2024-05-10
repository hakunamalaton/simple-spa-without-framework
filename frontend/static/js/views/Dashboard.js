export class Dashboard {
  constructor () {}

  setTitle () {
    document.title = 'Dashboard';
  }

  getHTML() {
    return `<div style="color: red;">Dashboard</div>`
  }
}
