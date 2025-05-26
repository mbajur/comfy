import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs";
import Rails from "@rails/ujs"

const DATA_ID_ATTRIBUTE = "data-id";
const sortableStore = {
  get(sortable) {
    return Array.from(sortable.el.children, (el) =>
      el.getAttribute(DATA_ID_ATTRIBUTE)
    );
  },

  set(sortable) {
    fetch(sortable.el.dataset.sortableListUpdateUrl, {
      body: JSON.stringify({ order: sortable.toArray() }),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": Rails.csrfToken(),
      },
      credentials: "same-origin",
      method: "PUT",
    });
  },
};

export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: ".dragger",
      draggable: "li",
      dataIdAttr: DATA_ID_ATTRIBUTE,
      store: sortableStore,
      onStart: (evt) => evt.from.classList.add("sortable-active"),
      onEnd: (evt) => evt.from.classList.remove("sortable-active"),
    });
  }

  disconnect() {
    this.sortable.destroy();
    this.sortable = null;
  }
}
