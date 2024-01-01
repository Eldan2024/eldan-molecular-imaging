source "http://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "rails"
gem 'sqlite3'
gem "sprockets-rails"
gem "puma"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem "mail_form"
gem "recaptcha", require: "recaptcha/rails"
gem 'MailchimpMarketing'
gem 'sitemap_generator'
gem 'whenever', require: false
gem "capistrano"
gem 'sass-rails', '>= 5'

group :development do
  gem "web-console"
end

group :production do
end

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'dotenv-rails'
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
