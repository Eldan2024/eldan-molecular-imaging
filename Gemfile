# Define the source of the gems
source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Specify the Ruby version used in this project
ruby "3.2.2"

# Rails and its core dependencies
gem "rails", "~> 7.1.2"            # The Rails framework
gem "sqlite3"                      # SQLite3 database adapter
gem "sprockets-rails"              # Asset pipeline integration for Rails
gem "puma"                         # The default web server for Rails
gem "importmap-rails"              # Manages JavaScript modules without needing a bundler
gem "turbo-rails"                  # Hotwire's Turbo library for Rails
gem "stimulus-rails"               # Hotwire's Stimulus framework for Rails
gem "jbuilder"                     # JSON templating for Rails
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ] # Provides timezone data

# Performance optimization
gem "bootsnap", require: false     # Reduces boot times

# Email and form handling
gem "mail_form"                    # Simplifies the creation of forms
gem "recaptcha", require: "recaptcha/rails" # Integrates Google reCAPTCHA for forms
gem 'MailchimpMarketing'           # Mailchimp's API for email marketing
gem 'sitemap_generator'            # Creates sitemaps for the website

# Scheduler and task management
gem 'whenever', require: false     # Provides a clear syntax for writing and deploying cron jobs

# Front-end libraries
gem 'turbolinks', '~> 5.2.0'       # Makes navigating a Rails app faster
gem 'bootstrap', '~> 5.3.2'        # Front-end framework for faster and easier web development
gem 'dartsass-sprockets'           # Dart Sass adapter for the Sprockets asset compiler
gem 'jquery-rails'                 # jQuery library for Rails
gem 'popper_js', '~> 2.11.8'       # Tooltip & popover positioning engine
gem 'webpacker'                    # Manages JavaScript in Rails using Webpack

# Group gems for development environment
group :development do
  gem "web-console"                # Provides a debugging tool inside the browser
  gem "capistrano"                 # A remote server automation and deployment tool
end

# Group gems for production environment
group :production do
  # Add production-specific gems here
end

# Group gems for development and test environments
group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ] # Debugging tool
  gem 'dotenv-rails'               # Loads environment variables from `.env`
end

# Group gems for test environment
group :test do
  gem "capybara"                   # Integration testing tool
  gem "selenium-webdriver"         # Tool for automating web applications
end