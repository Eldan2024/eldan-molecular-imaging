class PagesController < ApplicationController
  def index
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Home"
  end

  def contact
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Contact"
    @via = params[:via]
  end

  def partners
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Partners"

    @partner1_desc = "Established more than 40 years ago, Isorad Radiopharmaceuticals is a leading manufacturer of SPECT, PET, MRI contrast agents, and nuclear products, located in the SOREQ Nuclear Research Center (Soreq NRC) near Yavne, Israel."
    @partner2_desc = ""
    @partner3_desc = ""
    @partner4_desc = ""
    @partner5_desc = ""
    @partner6_desc = ""
  end

  def team
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Team"

    @member1_name = "Ariel Ikan"
    @member1_pos = ""
    @member1_linkedin = "https://www.linkedin.com/in/ariel-ikan/"
    @member1_image = @member1_name.split(' ').second.downcase + ".png"
    @member1_desc = ""

    @member2_name = "Tal Rabinovich"
    @member2_pos = "General Manager"
    @member2_linkedin = "https://www.linkedin.com/in/tal-rabinovich-659a54/"
    @member2_image = @member2_name.split(' ').second.downcase + ".png"
    @member2_desc = "Tal Rabinovitch joined the Neopharm Group in 2007 and was appointed as Eldan’s GM in 2013. Previously he served as VP for Business Development and Operations in LDD Advanced Technologies for 5 years. In 2012 he joined Eldan and was appointed VP for Strategic Development.

Prior to joining the group Mr. Rabinovich gained experience in business development and strategic planning while working in Shaldor, a strategy and management consulting firm. Mr. Rabinovitch holds an MBA degree as well as M.Sc. and B.Sc. degrees in Electrical Engineering."

    @member3_name = "Bareket Gelbhart"
    @member3_pos = "International Business Manager"
    @member3_linkedin = "https://www.linkedin.com/in/bareket-gelbhart-83904a16/"
    @member3_image = @member3_name.split(' ').second.downcase + ".png"
    @member3_desc = "Bareket Gelbhart joined Eldan Molecular Imaging in January 2022 as the International Business Manager. Previously she worked in Dipharma, serving as Head of Marketing for 6 years and as Chief Business Development Officer for additional 3 years.

Prior to Dipharma, Bareket worked in Teva Pharmaceuticals for 17 years, in different positions."

    @member4_name = "Ronit Duanis"
    @member4_pos = ""
    @member4_linkedin = ""
    @member4_image = @member4_name.split(' ').second.downcase + ".png"
    @member4_desc = ""

    @member5_name = "Haim Shoshan"
    @member5_pos = ""
    @member5_linkedin = ""
    @member5_image = @member5_name.split(' ').second.downcase + ".png"
    @member5_desc = ""
  end
end
