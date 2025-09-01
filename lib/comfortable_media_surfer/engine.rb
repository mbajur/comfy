# frozen_string_literal: true

require 'comfortable_media_surfer'
require 'rails'
require 'rails-i18n'
require 'comfy_bootstrap_form'
require 'active_link_to'
require 'kramdown'
require 'haml-rails'
require 'tabler_icons_ruby'
require 'diffy'
require 'importmap-rails'
require 'turbo-rails'

module ComfortableMediaSurfer
  class Engine < ::Rails::Engine
    initializer 'comfortable_media_surfer.importmap', before: 'importmap' do |app|
      app.config.importmap.paths << root.join('config/importmap.rb')
      app.config.importmap.cache_sweepers << root.join('app/assets/javascripts')
      # app.config.importmap.cache_sweepers << root.join("app/javascript")
    end

    initializer 'comfortable_media_surfer.setup_assets' do |app|
      app.config.assets.paths << root.join('app/assets/builds')
      app.config.assets.precompile += %w[comfy/admin/cms/application.js comfy/admin/cms/application.css]
    end

    initializer 'comfortable_media_surfer.assets' do |app|
      app.config.assets.precompile += %w[manifest]
    end

    initializer 'my_engine.yaml_column_permitted_classes' do
      Rails.application.config.active_record.yaml_column_permitted_classes ||= []
      Rails.application.config.active_record.yaml_column_permitted_classes += [
        ActiveSupport::HashWithIndifferentAccess,
        Symbol,
        ActiveSupport::TimeWithZone,
        ActiveSupport::TimeZone,
        Time
      ]
    end

    config.to_prepare do
      Dir.glob("#{Rails.root}app/**/*_decorator*.rb").each do |c|
        require_dependency(c)
      end
    end
  end
end
