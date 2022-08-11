require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Emi
  class Application < Rails::Application
    config.load_defaults 7.0
    config.serve_static_assets = true

    config.exceptions_app = self.routes

  end
end
