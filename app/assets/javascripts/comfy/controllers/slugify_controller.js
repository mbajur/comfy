import { Controller } from "@hotwired/stimulus"

const SLUGIFY_REPLACEMENTS = [
  [/[àáâã]/g, 'a'],
  [/ä/g, 'ae'],
  [/[èéëê]/g, 'e'],
  [/[ìíïî]/g, 'i'],
  [/[òóôõ]/g, 'o'],
  [/ö/g, 'oe'],
  [/[ùúû]/g, 'u'],
  [/ü/g, 'ue'],
  [/ñ/g, 'n'],
  [/ç/g, 'c'],
  [/ß/g, 'ss'],
  [/[·\/,:;_ ]/g, '-']
];

export default class extends Controller {
  static targets = ["input", "slug"]

  perform() {
    let slug = this.inputTarget.value.trim().toLowerCase();
    for (const [from, to] of SLUGIFY_REPLACEMENTS) {
      slug = slug.replace(from, to);
    }
    // Remove any other URL incompatible characters and replace multiple dashes
    // with just a single one.
    this.slugTarget.value = slug.replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
  };
}
