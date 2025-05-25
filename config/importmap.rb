pin "@rails/request.js", to: "https://cdn.jsdelivr.net/npm/@rails/request.js@0.0.11/dist/requestjs.min.js"
pin "@rails/ujs", to: "https://ga.jspm.io/npm:@rails/ujs@7.0.1/lib/assets/compiled/rails-ujs.js"

pin_all_from ComfortableMediaSurfer::Engine.root.join("app/assets/javascripts/comfy/controllers"), under: "comfy/controllers"
pin "comfy/application"

# Codemirror deps, see:
# https://discuss.codemirror.net/t/esm-compatible-codemirror-build-directly-importable-in-browser/5933/13
pin "style-mod", to: "https://esm.sh/style-mod"
pin "w3c-keyname", to: "https://esm.sh/w3c-keyname"
pin "@marijn/find-cluster-break", to: "https://esm.sh/@marijn/find-cluster-break"
pin "@lezer/", to: "https://esm.sh/*@lezer/"
pin "crelt", to: "https://esm.sh/crelt"
pin "@codemirror/", to: "https://esm.sh/*@codemirror/"
pin "codemirror", to: "https://esm.sh/*codemirror"

# ActionText
pin "trix", to: "https://cdn.jsdelivr.net/npm/trix@2.1.15/+esm"
pin "@rails/actiontext", to: "actiontext.esm.js"

# Time picker
pin "flatpickr", to: "https://cdn.jsdelivr.net/npm/flatpickr@4.0.6/+esm"

# File uploads
pin "plupload", to: "https://cdn.jsdelivr.net/npm/plupload@2.3.9/+esm"
