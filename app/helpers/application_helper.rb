module ApplicationHelper
  def active?(link_path)
    if current_page?(link_path)
      "active"
    else
      ""
    end
  end

  def custom_script_tag(src)
    javascript_include_tag src, defer: true
  end
end