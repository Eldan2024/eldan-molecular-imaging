class AboutController < ApplicationController
  def molecular_imaging
    @title = "Eldan Molecular Imaging" + " / " + controller_name.capitalize
    @desc = "Eldan Molecular Imaging is a young solid division, focused on supporting patients and physicians, by providing them with the highest-level products needed for diagnostic imaging & Nuclear Medicines procedures."
    @jarallax = "about_cover"
    @logo = "logo"
  end

  def eldan
    @title = "Eldan Electronic Instruments Ltd." + " / " + controller_name.capitalize
    @desc = "Established in 1960, Eldan Electronic Instruments Ltd. is a leader and one of the most experienced distributors in the Israeli medical devices and life science industries."
    @jarallax = "about_cover"
    @logo = "logo_eldan"
  end

  def neopharm_group
    @title = "Neopharm Group" + " / " + controller_name.capitalize
    @desc = "Neopharm Group, established in 1941, is one of Israel’s leading providers of innovative integrated solutions across the spectrums of healthcare and life science."
    @jarallax = "about_cover"
    @logo = "logo_neopharm"
  end
end
