SitemapGenerator::Sitemap.default_host = "http://www.eldanmi.com"
SitemapGenerator::Sitemap.create do
  add distribution_path, :changefreq => 'monthly'
  add team_path, :changefreq => 'monthly'
  add news_path, :changefreq => 'monthly'
  add contacts_path, :changefreq => 'monthly'

  add accessability_declaration_path, :changefreq => 'yearly'
  add privacy_policy_path, :changefreq => 'yearly'

  add products_tc99_path, :changefreq => 'monthly'
  add products_ga67_path, :changefreq => 'monthly'
  add products_tl201_path, :changefreq => 'monthly'

  add about_molecular_imaging_path, :changefreq => 'monthly'
  add about_eldan_path, :changefreq => 'monthly'
  add about_neopharm_group_path, :changefreq => 'monthly'
end