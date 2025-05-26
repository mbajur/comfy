# frozen_string_literal: true

# Tag for text content that is going to be rendered using ActionText in
# the admin area
#   {{ cms:wysiwyg identifier }}
#
#
class ComfortableMediaSurfer::Content::Tags::Wysiwyg < ComfortableMediaSurfer::Content::Tags::Fragment
  def render
    renderable ? ActionText::Content.new(content&.first).to_s : ''
  end

  def form_field(object_name, view, index)
    name    = "#{object_name}[fragments_attributes][#{index}][content]"
    options = { id: form_field_id, value: content }
    input   = view.send(:rich_text_area, name, nil, options)
    yield input
  end
end

ComfortableMediaSurfer::Content::Renderer.register_tag(
  :wysiwyg, ComfortableMediaSurfer::Content::Tags::Wysiwyg
)
