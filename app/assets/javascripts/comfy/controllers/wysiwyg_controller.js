import { Controller } from "@hotwired/stimulus"
import 'trix'
import '@rails/actiontext'

export default class extends Controller {
  connect() {

  }

  disconnect() {
    this.editor.destroy()
  }

  sync() {
    this.inputTarget.value = this.editor.state.doc.toString()
  }
}
