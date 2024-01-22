class NewsController < ApplicationController
  def index
    @title = "News"
    @articles_per_page = 4
    @articles = [
      ["Eldan Molecular Imaging Website is online", "With the growth of our worldwide presence we are happy to launch a new and updated website. Here, clients and other stakeholders can find all the information about our products as well as our growing international network of partners and clients.", "news/eldan_mi_website_online", "News", "Oct 12, 2022", "Ziv Gilboa", "logo_dark.png", "logo_light.png"]
    ]
  end

  def eldan_mi_website_online
    set_article_attributes(
      title: "Eldan Molecular Imaging Website is online",
      category: "News",
      date: "Oct 12, 2022",
      author: "Ziv Gilboa",
      description: "We are excited to announce that our website is now live. With the growth of our worldwide presence we are happy to launch a new and updated website.",
    )
  end

  def example
    set_article_attributes(
      title: "Example",
      category: "Category",
      date: "Feb 5, 2021",
      author: "Ariel Ikan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      tags: ["#technizium", "#radiopharmaceuticals", "#drugs"],
      cover_image: "cover-image.jpg",
      related_articles: [
        [news_path, "04.jpg", "Lorem Ipsum", "May 19, 2021", "Reprehenderit minim est id occaecat", "rabinovich.jpg", "Tal Rabinovich"], 
        [news_path, "05.jpg", "Eiusmod id duis", "Mar 13, 2019", "Aliquip ea esse labore voluptate fugiat pariatur ea", "gilboa.jpg", "Ziv Gilboa"], 
        [news_path, "06.jpg", "Aute consequat in amet cillum in", "Jun 25, 2018", "Ad ullamco adipisicing aliqua culpa", "ikan.jpg", "Ariel Ikan"]]
    )
  end

  private

  def set_article_attributes(title:, category:, date:, author:,  description:, tags: [], cover_image: "", related_articles: [])
    @article_title = title
    @category = category
    @date = date
    @author = author
    @description = description
    @tags = tags
    @cover_image = cover_image
    @related_articles = related_articles
    @title = "#{title} / #{controller_name.capitalize}"
  end
end