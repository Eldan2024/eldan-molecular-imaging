task :generate_sitemap do
  Rake::Task["sitemap:refresh"].invoke
end