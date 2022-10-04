class ProductsController < ApplicationController

  def ga67
    @page_desc = "Eldan Molecular Imaging"
    @breadcrumb = "Ga-67"
    @page_title =  @breadcrumb + " / " + controller_name.capitalize
    @title = "Gallium citrate (Ga-67) injection"
    @desc = "Gallium-67 (67Ga) is a cyclotron-produced radiometal used by single photon emission computed tomography (SPECT) imaging for localization of inflammatory lesions (infections). With Ga67 you can obtain images of a specific type of tissue, or disease state of tissue. Sterile Ga-67 manufactured in Israel since 1987."
    @image = "ga67.png".html_safe

    @questions = []

    @data = [
      ["Manufacturer", "<a class='text-decoration-none' href='http://www.isorad.co.il/en/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>".html_safe],
      ["Activity Reference Time", "ART 14.00 hr CET"],
      ["Storage", "Room Temperature"],
      ["Expiration", "10 days after ART"],
      ["Half Life", "78.2 hours"],
      ["Gamma Energy", "93, 185 and 300 keV"],
      ["Radionuclidic purity", "<sup>66</sup>Ga < 4.35 kBq/MBq <sup>67</sup>Ga".html_safe],
      ["Specific Activity", "Carrier free"],
      ["Radiochemical purity", "≥ 85%"],
      ["Radioactive concentration", "74 MBq/ml at ART"],
      ["Composition", "<sup>67</sup>Gallium (as gallium citrate)<br>Sodium chloride<br>Sodium citrate<br>Water for injections q.s.p.".html_safe],
      ["pH", "4.5 - 8.0"],
      ["SPC", "N/A"]]
  end

  def mo99
    @page_desc = "Eldan Molecular Imaging"
    @breadcrumb = "<sup>99</sup>Mo/<sup>99m</sup>Tc".html_safe
    @page_title =  @breadcrumb.gsub("<sup>","").gsub("</sup>","") + " / " + controller_name.capitalize
    @title = "<sup>99</sup>Mo/<sup>99m</sup>Tc Generator".html_safe
    @desc = "A technetium-99m generator is a device used to extract the isotope 99mTc of technetium from a decaying sample of molybdenum-99. Tc99m is used for a variety of nuclear medicine diagnostic in single photon emission computed tomography (SPECT) procedures, where its short half-life is very useful. Sterile Technetium-99m generators are manufactured in Israel since 1976 utilizing dry technology. The generators are ergonomic and recyclable.".html_safe
    @image = "tc99.png".html_safe

    @questions = []

    @data = [
      ["Manufacturer", "<a class='text-decoration-none' href='http://www.isorad.co.il/en/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>".html_safe],
      ["Storage", "Room Temperature"],
      ["Expiration", "21 days after ART"],
      ["Half Life", "66 hours"],
      ["Gamma Energy", "740 keV"],
      ["Radionuclidic purity", ">99.9%"],
      ["Specific Activity", "Carrier free"],
      ["Composition", "{99}Mo"],
      ["Maximum size", "4.25 Ci, 5 days calibration"],
      ["SPC", "N/A"]]
  end

  def ti201
    @page_desc = "Eldan Molecular Imaging"
    @breadcrumb = "<sup>201</sup>TI".html_safe
    @page_title =  @breadcrumb.gsub("<sup>","").gsub("</sup>","") + " / " + controller_name.capitalize
    @title = "Thallium Chloride (<sup>201</sup>TI) injection".html_safe
    @desc = "Thallium-201 (201Tl) is a radioactive potassium analog used in the diagnosis of coronary artery disease and parathyroid hyperactivity using single photon emission computed tomography (SPECT). Other useful applications for a thallium-201 scan, like tumor diagnosis and olfacto-scintigraphy, are being explored and have shown promising results in various studies. It is produced in a cyclotron by bombarding thallium-203 with protons. Sterile TI-201 has been manufactured in Israel since 1987.".html_safe
    @image = "ti201.png".html_safe

    @questions = []

    @data = [
      ["Manufacturer", "<a class='text-decoration-none' href='http://www.isorad.co.il/en/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>".html_safe],
      ["Activity Reference Time", "ART 18.00 hr CET"],
      ["Storage", "Room Temperature"],
      ["Expiration", "10 days after ART"],
      ["Half Life", "73 hours"],
      ["Gamma Energy", "167 keV"],
      ["Radionuclidic purity", "<sup>200</sup>TI: < 1%<br><sup>202</sup>Tl: < 0.5%".html_safe],
      ["Specific Activity", "> 18.5 GBq/mg"],
      ["Radiochemical purity", "≥ 85%"],
      ["Radioactive concentration", "37 MBq/ml at ART"],
      ["Composition", "<sup>201</sup>Tl as Thallium chloride<br>1 ml sterile, isotonic sodium chloride solution".html_safe],
      ["pH", "4.5 - 7.5"],
      ["SPC", "N/A"]]
  end
end
