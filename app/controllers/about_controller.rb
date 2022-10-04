class AboutController < ApplicationController
  def eldan
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Eldan / About"
    @page_image = "cover1.jpg"
    @page_logo = "logo_eldan.png"
  end

  def molecular_imaging
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Eldan Molecular Imaging / About"
    @page_image = "cover1.jpg"
    @page_logo = "logo.png"
  end

  def neopharm_group
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Neopharm Group / About"
    @page_image = "cover1.jpg"
    @page_logo = "logo_neopharm.png"
  end
end
