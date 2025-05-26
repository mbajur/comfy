import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["read", "edit"]

  showEdit() {
    this.readTarget.style.display = 'none';
    this.editTarget.style.display = 'block';
  }

  hideEdit() {
    this.readTarget.style.display = 'block';
    this.editTarget.style.display = 'none';
  }
}
