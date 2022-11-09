class ProductsController < ApplicationController

  def tc99
    @breadcrumb = "<sup>99</sup>Mo/<sup>99m</sup>Tc".html_safe
    @title =  @breadcrumb.gsub("<sup>","").gsub("</sup>","") + " / " + controller_name.capitalize
    @desc = "Eldan Molecular Imaging"
    @product_title = "<sup>99</sup>Mo/<sup>99m</sup>Tc Generator".html_safe
    @product_desc = "A technetium-99m generator is a device used to extract the isotope <sup>99m</sup>Tc of technetium from a decaying sample of molybdenum-99. <sup>99m</sup>Tc is used for a variety of nuclear medicine diagnostic in single photon emission computed tomography (SPECT) procedures, where its short half-life is very useful. Sterile Technetium-99m generators are manufactured in Israel since 1976 utilizing dry technology. The generators are ergonomic and recyclable.".html_safe

    @questions = []

    @data = [
      ["Manufacturer", "<a class='text-decoration-none' href='http://www.isorad.co.il/en/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>".html_safe],
      ["Storage", "Room Temperature"],
      ["Expiration", "24 days from production day"],
      ["Half Life", "66 hours"],
      ["Radiochemical purity", "<sup>99m</sup>TcO4>95%".html_safe],
      ["Maximum size", "4.25 Ci, 5 days calibration"],
      ["SPC", "N/A"]]
  end

  def tl201
    @breadcrumb = "<sup>201</sup>Tl".html_safe
    @title =  @breadcrumb.gsub("<sup>","").gsub("</sup>","") + " / " + controller_name.capitalize
    @desc = "Eldan Molecular Imaging"
    @product_title = "Thallium Chloride (<sup>201</sup>Tl) injection".html_safe
    @product_desc = "Thallium-201 (<sup>201</sup>Tl) is a radioactive potassium analog used in the diagnosis of coronary artery disease and parathyroid hyperactivity using single photon emission computed tomography (SPECT). Sterile <sup>201</sup>Tl has been manufactured in Israel since 1987.".html_safe

    @questions = []

    @data = [
      ["Manufacturer", "<a class='text-decoration-none' href='http://www.isorad.co.il/en/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>".html_safe],
      ["Activity Reference Time", "ART 13:00 hr CET"],
      ["Storage", "Room Temperature"],
      ["Expiration", "15 days from production day"],
      ["Half Life", "73 hours"],
      ["Radioactive concentration", "37 MBq/ml on the calibration date"],
      ["Composition", "<sup>201</sup>Tl as Thallium chloride<br>1-12 ml sterile, isotonic sodium chloride solution".html_safe],
      ["pH", "4.5 - 7.5"],
      ["SPC", "N/A"]]
  end
  
  def ga67
    @breadcrumb = "<sup>67</sup>Ga".html_safe
    @title =  @breadcrumb + " / " + controller_name.capitalize
    @desc = "Eldan Molecular Imaging"
    @product_title = "Gallium citrate (<sup>67</sup>Ga) injection".html_safe
    @product_desc = "Gallium-67 (<sup>67</sup>Ga) is a cyclotron-produced radiometal used by single photon emission computed tomography (SPECT) imaging for localization of inflammatory lesions (infections). With <sup>67</sup>Ga you can obtain images of a specific type of tissue, or disease state of tissue. Sterile <sup>67</sup>Ga manufactured in Israel since 1987.".html_safe

    @questions = []

    @data = [
      ["Manufacturer", "<a class='text-decoration-none' href='http://www.isorad.co.il/en/' target='_blank'>Isorad Radiopharmaceuticals, Israel</a>".html_safe],
      ["Activity Reference Time", "ART 13:00 hr CET"],
      ["Storage", "Room Temperature"],
      ["Expiration", "15 days from production day"],
      ["Half Life", "78.2 hours"],
      ["Radioactive concentration", "74 MBq/ml on the calibration date"],
      ["Composition", "<sup>67</sup>Gallium (as gallium citrate)<br>Sodium chloride<br>Sodium citrate<br>Water for injections q.s.p.".html_safe],
      ["pH", "4.5 - 8.0"],
      ["SPC", "N/A"]]
  end
end
