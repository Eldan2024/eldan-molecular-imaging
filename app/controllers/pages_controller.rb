class PagesController < ApplicationController
  def index
    @title =  "Home"
    @desc = "To provide you with the best radiopharmaceutical products, best service, and best distribution channels, so you can provide your patients and caregivers, top-quality products as soon as they need them."
  end

  def distribution
    @title =  "Distribution"
    @desc = "Eldan Molecular Imaging is looking beyond the common practice to provide a better and more reliable service in its distribution of radiopharmaceuticals."
    @jarallax = "distribution_cover"

    @partners = []

    @distribution = [
      ["Isorad Radiopharmaceutical", "", "", "", "31.89814693730076", "34.70073643328131"],
      ["Eldan", "", "", "HaShiloah St 6, Petah Tikva, Israel", "32.0912614028465", "34.855602910534785"]]

    @locations = @distribution.map do |element|
      [element[0], element[4].to_f, element[5].to_f]
    end
  end

  def team
    @title =  "Team"
    @jarallax = "team_cover"

    @desc1 = "Tal Rabinovich joined Eldan in 2012, was appointed as General Manager in 2013 and is heading an extensive operation in molecular diagnostics and radiopharmaceuticals. <br><br>Prior to joining Eldan, Tal served as VP for business development and operations at LDD Advanced Technologies.".html_safe

    @desc2 = "Ziv Gilboa joined Eldan Molecular Imaging in October 2023 as International Business Manager. Previously he worked in Cnoga Medical, serving as Head of Sales and Marketing in Latin America for 8 years, as well as 5 years as general manager of Cnoga Brazil.<br><br>
    Prior to Cnoga Medical, Ziv worked in Logic Industries for 8 years in different senior positions in different security projects across the UEA.<br><br>
    Prior to this Position Ziv worked as a director in the Telecommunication Market for 7 Years, supporting entire projects for a number of companies including: Alcatel, Erikson and Siemens".html_safe
    
    @desc3 = "Ariel joined Eldan Molecular Imaging in May 2022. Previously Ariel worked as General Manager at Fresenius Medical Care, Israel for 4 years. Prior to that Ariel was the General Manager of Philips Healthcare, Israel for over 10 years and Developed loan market business for medical devices in China and Africa. <br><br>
    Prior to this position Ariel served as Business unit manager at Schering Plough for 5 years and before this position Ariel held different managerial positions in Teva Medical Israel.".html_safe

    @desc4 = "Orit Hillel Joined Eldan in 2008 as an Analyst. In 2015 she was appointed to the position Analyst, Sales & Technical Administrators Manager"

    @desc5 = "Haim Shoshan joined Eldan in 2001 as CFO. Among his previous positions Mr. Shoshan was CFO of Delta Quality Products Ltd. (Intergamma Group) and CFO of Autolux Tires Group.".html_safe

    @desc6 = "Ronit Duanis joined Promedico in 2003 and Eldan in 2006 after a merge with Neopharm Group. She has been working as a Sales Operation Coordinator since 2006 in the Medical Division"

    @members = [
      ["Tal Rabinovich", "General Manager", @desc1],
      ["Ziv Gilboa", "International Business Manager", @desc2],
      ["Ariel Ikan", "VP Business Development", @desc3],
      ["Orit Hillel", "Finance Coordinator", @desc4],
      ["Haim Shoshan", "VP of Finance and Logistics", @desc5],
      ["Ronit Duanias ", "Operation Coordinator", @desc6]]
  end
end
