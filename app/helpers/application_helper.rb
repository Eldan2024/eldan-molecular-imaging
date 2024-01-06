module ApplicationHelper
  def active?(link_path)
    if current_page?(link_path)
      "active"
    else
      ""
    end
  end

  def deferred_javascript_tags(*scripts)
    scripts.map do |script|
      if script.match?(/^https?:\/\//)
        tag.script('', src: script, defer: true)
      else
        javascript_include_tag(script, defer: true)
      end
    end.join("\n").html_safe
  end  
end