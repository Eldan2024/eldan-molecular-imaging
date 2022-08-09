class AboutController < ApplicationController
  def eldan
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Eldan / About"
  end

  def molecular_imaging
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Molecular Imaging / About"
  end

  def neopharm
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Neopharm / About"
  end
end
