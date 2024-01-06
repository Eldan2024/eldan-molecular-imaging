class AboutController < ApplicationController
  before_action :set_common_attributes

  def molecular_imaging
    set_page_attributes(
      title: "Eldan Molecular Imaging",
      description: "Eldan Molecular Imaging is a young solid division, focused on supporting patients and physicians, by providing them with the highest-level products needed for diagnostic imaging & Nuclear Medicines procedures.",
      logo: ""
    )
  end

  def eldan
    set_page_attributes(
      title: "Eldan Electronic Instruments Ltd.",
      description: "Established in 1960, Eldan Electronic Instruments Ltd. is a leader and one of the most experienced distributors in the Israeli medical devices and life science industries.",
      logo: "logo_eldan"
    )
  end

  def neopharm_group
    set_page_attributes(
      title: "Neopharm Group",
      description: "Neopharm Group, established in 1941, is one of Israel’s leading providers of innovative integrated solutions across the spectrums of healthcare and life science.",
      logo: "logo_neopharm"
    )
  end

  private

  def set_common_attributes
    @jarallax = "about_cover"
  end

  def set_page_attributes(title:, description:, logo:)
    @title = "#{title} / #{controller_name.capitalize}"
    @description = description
    @logo = logo
  end
end