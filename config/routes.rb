Rails.application.routes.draw do
  root 'pages#index'

  get 'products/ga67'
  get 'products/mo99'
  get 'products/tl201'

  get 'news/index'
  get 'news/example'

  get 'pages/contact'
  get 'pages/partners'
  get 'pages/team'

  get 'about/eldan'
  get 'about/molecular_imaging'
  get 'about/neopharm'

  get 'shared/_header'
  get 'shared/_footer'
  
end
