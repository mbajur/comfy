import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

export default class extends Controller {
  static values = {
    locale: String,
  }

  connect() {
    this.picker = flatpickr(this.element, {
      format: "yyyy-mm-dd",
      locale: this.localeValue || "en",
    });
  }

  disconnect() {
    this.picker.destroy();
    this.picker = null;
  }
}
