class AboutController < ApplicationController
  def eldan
    @title = "Eldan Electronic Instruments Ltd. / About"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "about_cover"
    @logo = "logo_eldan"
  end

  def molecular_imaging
    @title = "Eldan Molecular Imaging / About"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "about_cover"
    @logo = "logo"
  end

  def neopharm_group
    @title = "Neopharm Group / About"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "about_cover"
    @logo = "logo_neopharm"
  end
end
