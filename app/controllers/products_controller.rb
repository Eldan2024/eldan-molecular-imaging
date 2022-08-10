class ProductsController < ApplicationController

  def ga67
    @page_desc = "Eldan Molecular Imaging"
    @breadcrumb = "Ga-67"
    @page_title =  @breadcrumb + " / " + controller_name.capitalize
    @title = "Gallium citrate (Ga-67) injection"
    @desc = "Ut ipsum cillum sunt enim. Nisi mollit eu aliqua mollit laboris ea anim velit commodo aute occaecat ea. Ipsum quis exercitation fugiat consectetur adipisicing ut. Irure non quis dolore anim cupidatat commodo cupidatat cillum ad. Nulla labore aliquip magna pariatur ea elit exercitation incididunt ipsum."

    @questions = [
      ["Example Question 1", "Quis veniam sunt nisi ut proident officia aliqua irure aliqua."]]

    @data = [
      ["Indication", "Localization of malignant growths and inflammatory lesions"],
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
    @desc = "The Technetium 99m Generator is used to obtain a sterile, non-pyrogenic supply of Tc-99m as Sodium Pertechnetate. The generator consists of a previously sterilized column containing Molybdenum-99, absorbed on Alumina. The generator maybe eluted whenever sufficient quantities of Tc 99m have accumulated in the column."

    @questions = [
      ["Example Question 1", "Quis veniam sunt nisi ut proident officia aliqua irure aliqua."]]

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

  def tl201
    @page_desc = "Eldan Molecular Imaging"
    @breadcrumb = "<sup>201</sup>TI".html_safe
    @page_title =  @breadcrumb.gsub("<sup>","").gsub("</sup>","") + " / " + controller_name.capitalize
    @title = "Thallium Chloride (<sup>201</sup>TI) injection".html_safe
    @desc = "Ut ipsum cillum sunt enim. Nisi mollit eu aliqua mollit laboris ea anim velit commodo aute occaecat ea. Ipsum quis exercitation fugiat consectetur adipisicing ut. Irure non quis dolore anim cupidatat commodo cupidatat cillum ad. Nulla labore aliquip magna pariatur ea elit exercitation incididunt ipsum."

    @questions = [
      ["Example Question 1", "Quis veniam sunt nisi ut proident officia aliqua irure aliqua."]]

    @data = [
      ["Indication", "Myocardial scintigraphy<br>Tumour detection<br>Parathyroid scintigraph".html_safe],
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
