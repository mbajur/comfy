import Rails from "@rails/ujs"
import * as BSN from "bootstrapNative";
import 'trix'
import '@rails/actiontext'
import "@hotwired/turbo-rails"
import "comfy/controllers"

Rails.start();

document.addEventListener('turbo:load', function () {
  var container = container || document.getElementById('#comfy');
  BSN.initCallback(container);
}, false);
