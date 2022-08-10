class NewsController < ApplicationController
  def index
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "News"
  end

  def example
    @title = "Example"
    @category = "Category"
    @date_published = "Feb 5, 2021"
    @author = "Ariel Ikan"
    @cover_image = "cover-image.jpg"
    @tags = ["#technizium", "#radiopharmaceuticals", "#drugs"]
    @related_articles = [
      [news_path, "04.jpg", "Lorem Ipsum", "May 19, 2021", "Reprehenderit minim est id occaecat", "rabinovich.png", "Tal Rabinovich"], 
      [news_path, "05.jpg", "Eiusmod id duis", "Mar 13, 2019", "Aliquip ea esse labore voluptate fugiat pariatur ea", "gelbhart.png", "Bareket Gelbhart"], 
      [news_path, "06.jpg", "Aute consequat in amet cillum in", "Jun 25, 2018", "Ad ullamco adipisicing aliqua culpa", "ikan.png", "Ariel Ikan"]]

    @page_desc = "Eldan Molecular Imaging"
    @page_title =  @title + " / News"
  end
end
