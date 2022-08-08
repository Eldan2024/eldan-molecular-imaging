Rails.application.config.assets.version = "1.0"

Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "boxicons")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "boxicons", "css")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "bootstrap" , "dist" , "js")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "smooth-scroll" , "dist")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "cleave.js" , "dist")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "swiper")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery", "css")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "jarallax", "dist")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery", "plugins")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery", "plugins", "fullscreen")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery", "plugins", "zoom")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery", "plugins", "video")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "vendor", "lightgallery", "plugins", "thumbnail")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "favicon")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "js")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "images")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "images", "about")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "images", "team")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "images", "news")
Rails.application.config.assets.paths << Rails.root.join("app", "assets", "images", "contacts")

Rails.application.config.assets.precompile += %w( boxicons.min.css )

Rails.application.config.assets.compile = true