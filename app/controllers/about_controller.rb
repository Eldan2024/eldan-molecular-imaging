class AboutController < ApplicationController
  def eldan
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Eldan / About"
    @page_image = "cover.jpg"
  end

  def molecular_imaging
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Eldan Molecular Imaging / About"
    @page_image = "cover.jpg"
  end

  def neopharm
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Neopharm / About"
    @page_image = "cover.jpg"
  end
end
