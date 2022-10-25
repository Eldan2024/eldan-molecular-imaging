class AboutController < ApplicationController
  def eldan
    @title = "Eldan / About"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "about_cover"
    @logo = "logo_eldan.png"
  end

  def molecular_imaging
    @title = "Eldan Molecular Imaging / About"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "about_cover"
    @logo = "logo.png"
  end

  def neopharm_group
    @title = "Neopharm Group / About"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "about_cover"
    @logo = "logo_neopharm.png"
  end
end
