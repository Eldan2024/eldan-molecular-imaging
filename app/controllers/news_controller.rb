class NewsController < ApplicationController
  def index
    @title =  "News"
    @desc = "Eldan Molecular Imaging"

    @articles_per_page = 4
    @articles = [["Eldan Molecular Imaging Website is online", "With the growth of our worldwide presence we are happy to launch a new and updated website. Here, clients and other stakeholders can find all the information about our products as well as our growing international network of partners and clients.","news/eldan_mi_website_online", "News", "Oct 12, 2022", "Bareket Gelbhart", "logo_dark.png", "logo_light.png"]]
  end

  def example
    @article_title = "Example"
    @category = "Category"
    @date_published = "Feb 5, 2021"
    @author = "Ariel Ikan"
    @cover_image = "cover-image.jpg"
    @tags = ["#technizium", "#radiopharmaceuticals", "#drugs"]
    @related_articles = [
      [news_path, "04.jpg", "Lorem Ipsum", "May 19, 2021", "Reprehenderit minim est id occaecat", "rabinovich.png", "Tal Rabinovich"], 
      [news_path, "05.jpg", "Eiusmod id duis", "Mar 13, 2019", "Aliquip ea esse labore voluptate fugiat pariatur ea", "gelbhart.png", "Bareket Gelbhart"], 
      [news_path, "06.jpg", "Aute consequat in amet cillum in", "Jun 25, 2018", "Ad ullamco adipisicing aliqua culpa", "ikan.png", "Ariel Ikan"]]

    @desc = "Eldan Molecular Imaging"
    @title =  @article_title + " / " + controller_name.capitalize
  end

  def eldan_mi_website_online
    @article_title = "Eldan Molecular Imaging Website is online"
    @category = "News"
    @date_published = "Oct 12, 2022"
    @author = "Bareket Gelbhart"
    @tags = []
    @related_articles = []

    @desc = "Eldan Molecular Imaging"
    @title =  @article_title + " / " + controller_name.capitalize
  end
end
