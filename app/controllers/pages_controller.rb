class PagesController < ApplicationController
  def index
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Home"
  end

  def distribution
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Distribution"
    @page_image = "distribution-cover.jpg"

    @partners = [
      ["Isorad" , "Established more than 40 years ago, Isorad Radiopharmaceuticals is a leading manufacturer of SPECT, PET, MRI contrast agents, and nuclear products, located in the SOREQ Nuclear Research Center (Soreq NRC) near Yavne, Israel."]]

    @distribution = [
      ["Bareket Gelbhart", "+41 797 995 117", "bareketg@eldan.biz", "Via Giuseppe Motta 9, 6826 Riva San Vitale", "45.90162203709794", "8.971096270527374"],
      ["Isorad Radiopharmaceutical", "", "", "", "31.89814693730076", "34.70073643328131"],
      ["Eldan", "", "", "HaShiloah St 6, Petah Tikva, Israel", "32.0912614028465", "34.855602910534785"]]
  end

  def team
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Team"

    @desc1 = "Tal Rabinovitch joined the Neopharm Group in 2007 and was appointed as Eldan’s GM in 2013. Previously he served as VP for Business Development and Operations in LDD Advanced Technologies for 5 years. In 2012 he joined Eldan and was appointed VP for Strategic Development.<br><br>Prior to joining the group Mr. Rabinovich gained experience in business development and strategic planning while working in Shaldor, a strategy and management consulting firm. Mr. Rabinovitch holds an MBA degree as well as M.Sc. and B.Sc. degrees in Electrical Engineering.".html_safe

    @desc2 = "Bareket Gelbhart joined Eldan Molecular Imaging in January 2022 as the International Business Manager. Previously she worked in Dipharma, serving as Head of Marketing for 6 years and as Chief Business Development Officer for additional 3 years.<br><br>Prior to Dipharma, Bareket worked in Teva Pharmaceuticals for 17 years, in different positions.".html_safe
    
    @desc3 = ""

    @desc4 = ""

    @desc5 = ""

    @desc6 = ""

    @members = [
      ["Tal Rabinovich", "General Manager", "https://www.linkedin.com/in/tal-rabinovich-659a54/", @desc1],
      ["Bareket Gelbhart", "International Business Manager", "https://www.linkedin.com/in/bareket-gelbhart-83904a16/", @desc2],
      ["Ariel Ikan", "VP Business Development", "https://www.linkedin.com/in/ariel-ikan/", @desc3],
      ["Ronit Duanis", "Operation Coordinator", "", @desc4],
      ["Haim Shoshan", "Vice President of Finance and Logistics", "", @desc5],
      ["Asaf Asaf", "", "", @desc6]]
  end
end
