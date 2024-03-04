class ProductsController < ApplicationController
  def tc99
    @description = "99Mo/99mTc Generator is an instrument that is used to extract the isotope 99mTc from a decaying molybdenum-99"

    set_product_attributes(
      breadcrumb: "<sup>99</sup>Mo/<sup>99m</sup>Tc",
      product_title: "<sup>99</sup>Mo/<sup>99m</sup>Tc Generator",
      product_desc: "A technetium-99m generator is a device used to extract the isotope <sup>99m</sup>Tc from a decaying molybdenum-99. <sup>99m</sup>Tc is used for a variety of nuclear medicine diagnostic in single photon emission computed tomography (SPECT) procedures, where its short half-life is very useful. Sterile Technetium-99m generators are manufactured in Israel since 1976 utilizing dry technology. The generators are ergonomic and recyclable.",
      data: [
        ["Manufacturer", "<a class='text-decoration-none' href='https://isorad.co.il/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>"],
        ["Storage", "Room Temperature"],
        ["Expiration", "24 days from production day"],
        ["Half Life", "66 hours"],
        ["Radiochemical purity", "<sup>99m</sup>TcO4>95%"],
        ["Maximum size", "4.25 Ci, 5 days calibration"]
      ]
    )
  end

  def tl201
    @description = "Thallium-201 (201Tl) is a radioactive potassium analog used in the diagnosis of coronary artery disease and parathyroid hyperactivity"

    set_product_attributes(
      breadcrumb: "<sup>201</sup>Tl",
      product_title: "Thallium Chloride (<sup>201</sup>Tl) injection",
      product_desc: "Thallium-201 (<sup>201</sup>Tl) is a radioactive potassium analog used in the diagnosis of coronary artery disease and parathyroid hyperactivity using single photon emission computed tomography (SPECT). Sterile <sup>201</sup>Tl has been manufactured in Israel since 1987.",
      data: [
        ["Manufacturer", "<a class='text-decoration-none' href='https://isorad.co.il/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>"],
        ["Activity Reference Time", "ART 13:00 hr CET"],
        ["Storage", "Room Temperature"],
        ["Expiration", "15 days from production day"],
        ["Half Life", "73 hours"],
        ["Radioactive concentration", "37 MBq/ml on the calibration date"],
        ["Composition", "<sup>201</sup>Tl as Thallium chloride<br>1-12 ml sterile, isotonic sodium chloride solution"],
        ["pH", "4.5 - 7.5"]
      ]
    )
  end

  def ga67
    @description = "Gallium-67 (67Ga) is a cyclotron-produced radiometal used by single photon emission computed tomography (SPECT) imaging for localization of inflammatory lesions (infections)"

    set_product_attributes(
      breadcrumb: "<sup>67</sup>Ga",
      product_title: "Gallium citrate (<sup>67</sup>Ga) injection",
      product_desc: "Gallium-67 (<sup>67</sup>Ga) is a cyclotron-produced radiometal used by single photon emission computed tomography (SPECT) imaging for localization of inflammatory lesions (infections). With <sup>67</sup>Ga you can obtain images of a specific type of tissue, or disease state of tissue. Sterile <sup>67</sup>Ga manufactured in Israel since 1987.",
      data: [
        ["Manufacturer", "<a class='text-decoration-none' href='https://isorad.co.il/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>"],
        ["Activity Reference Time", "ART 13:00 hr CET"],
        ["Storage", "Room Temperature"],
        ["Expiration", "15 days from production day"],
        ["Half Life", "78.2 hours"],
        ["Radioactive concentration", "74 MBq/ml on the calibration date"],
        ["Composition", "<sup>67</sup>Gallium (as gallium citrate)<br>Sodium chloride<br>Sodium citrate<br>Water for injections q.s.p."],
        ["pH", "4.5 - 8.0"]
      ]
    )
  end

  private

  def set_product_attributes(breadcrumb:, product_title:, product_desc:, data:)
    @breadcrumb = breadcrumb.html_safe
    @title = "#{remove_sup_tags(@breadcrumb)} / #{controller_name.capitalize}"
    @product_title = product_title.html_safe
    @product_desc = product_desc.html_safe
    @questions = []
    @data = data.map { |item| [item[0], item[1].html_safe] }
  end

  def remove_sup_tags(str)
    str.gsub("<sup>", "").gsub("</sup>", "")
  end
end