class PagesController < ApplicationController
  def index
    @title =  "Home"
    @desc = "Eldan Molecular Imaging"
  end

  def distribution
    @title =  "Distribution"
    @desc = "Eldan Molecular Imaging"
    @jarallax = "distribution-cover.jpg"

    @partners = [
      ["Isorad" , "Established more than 40 years ago, Isorad Radiopharmaceuticals is a leading manufacturer of SPECT, PET, MRI contrast agents, and nuclear products, located in the SOREQ Nuclear Research Center (Soreq NRC) near Yavne, Israel."]]

    @distribution = [
      ["Bareket Gelbhart", "+41 797 995 117", "bareketg@eldan.biz", "Via Giuseppe Motta 9, 6826 Riva San Vitale", "45.90162203709794", "8.971096270527374"],
      ["Isorad Radiopharmaceutical", "", "", "", "31.89814693730076", "34.70073643328131"],
      ["Eldan", "", "", "HaShiloah St 6, Petah Tikva, Israel", "32.0912614028465", "34.855602910534785"]]
  end

  def team
    @title =  "Team"
    @desc = "Eldan Molecular Imaging"

    @desc1 = "Tal Rabinovich joined Eldan in 2012, was appointed as General Manager in 2013 and is heading an extensive operation in molecular diagnostics and radiopharmaceuticals. <br><br>Prior to joining Eldan Tal served as VP for business development and operations at LDD Advanced Technologies.".html_safe

    @desc2 = "Bareket Gelbhart joined Eldan Molecular Imaging in January 2022 as the International Business Manager. Previously she worked in Dipharma, serving as Head of Marketing for 6 years and as Chief Business Development Officer for additional 3 years.<br><br>Prior to Dipharma, Bareket worked in Teva Pharmaceuticals for 17 years, in different positions.".html_safe
    
    @desc3 = "Ariel joined Eldan Molecular Imaging in May 2022. Previously Ariel worked as General Manager at Fresenius Medical Care, Israel for 4 years. Prior to that Ariel was the General Manager of Philips Healthcare ,Israel for over 10 years and Developed loan market business for medical device in China and Africa. <br><br>Prior to this position Ariel served as Business unit manager at Schering Plough for 5 years and before this position Ariel held different managerial positions in Teva Medical Israel.".html_safe

    @desc4 = "I joined Promedico in 2003 and Eldan in 2006 after a merge with Neopharm Group. I've been working as a Sales Operation Coordinator since 2006 in the Medical Division"

    @desc5 = "Haim Shoshan joined Eldan in 2001 as CFO. Among his previous positions Mr. Shoshan was CFO of Delta Quality Products Ltd. (Intergamma Group) and CFO of Autolux Tires Group.".html_safe

    @desc6 = ""

    @members = [
      ["Tal Rabinovich", "General Manager", "https://www.linkedin.com/in/tal-rabinovich-659a54/", @desc1],
      ["Bareket Gelbhart", "International Business Manager", "https://www.linkedin.com/in/bareket-gelbhart-83904a16/", @desc2],
      ["Ariel Ikan", "VP Business Development", "https://www.linkedin.com/in/ariel-ikan/", @desc3],
      ["Orit Hillel", "Finance Coordinator", "", @desc4],
      ["Haim Shoshan", "VP of Finance and Logistics", "", @desc5],
      ["Ronit Duanis ", "Operation Coordinator", "", @desc6]]
  end
end
