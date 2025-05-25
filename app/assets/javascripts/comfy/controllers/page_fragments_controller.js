import { Controller } from "@hotwired/stimulus"
import { get } from "@rails/request.js"

export default class extends Controller {
  static values = {
    fragmentsUrl: String
  }

  async onChange() {
    const url = new URL(this.fragmentsUrlValue, document.location.href);
    url.searchParams.set('layout_id', this.element.value);

    return await get(url, { responseKind: "turbo-stream" })
  }
}
