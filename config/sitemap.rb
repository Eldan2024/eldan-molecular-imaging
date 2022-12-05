SitemapGenerator::Sitemap.default_host = "https://eldanmi.com"
SitemapGenerator::Sitemap.create do
  add '/distribution', :changefreq => 'monthly'
  add '/team', :changefreq => 'monthly'
  add '/news', :changefreq => 'monthly'
  add '/contacts', :changefreq => 'monthly'

  add '/privacy_policy', :changefreq => 'yearly'
  add '/accessability_declaration', :changefreq => 'yearly'

  add '/products/tc99', :changefreq => 'monthly'
  add '/products/tl201', :changefreq => 'monthly'
  add '/products/ga67', :changefreq => 'monthly'

  add '/about/molecular_imaging', :changefreq => 'monthly'
  add '/about/eldan', :changefreq => 'monthly'
  add '/about/neopharm_group', :changefreq => 'monthly'
end