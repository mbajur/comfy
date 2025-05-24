import { Controller } from "@hotwired/stimulus"
// import CodeMirror from "codemirror";
import { basicSetup, EditorView } from "codemirror";
import { html } from "@codemirror/lang-html"
// import { markdown } from "@codemirror/lang-markdown"
// import "@codemirror/lang-markdown";
// import "codemirror/mode/htmlmixed/htmlmixed";

export default class extends Controller {
  static targets = ['editor', 'input']
  static values = {
    doc: String,
  }

  connect() {
    this.editor = new EditorView({
      doc: this.docValue,
      tabSize: 2,
      lineWrapping: true,
      autoCloseTags: true,
      lineNumbers: true,
      viewportMargin: Infinity,
      extensions: [
        basicSetup,
        html(),
        EditorView.updateListener.of((view) => {
          if (view.docChanged) { this.sync() }
        })
      ],
      parent: this.editorTarget
    })
  }

  disconnect() {
    this.editor.destroy()
  }

  sync() {
    this.inputTarget.value = this.editor.state.doc.toString()
  }
}
