Recaptcha.configure do |config|
  config.enterprise = 'true'
  config.enterprise_api_key = ENV['RECAPTCHA_ENTERPRISE_API_KEY']
  config.enterprise_project_id = 'EldanMI'
end