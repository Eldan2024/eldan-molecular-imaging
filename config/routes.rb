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

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all

  resources :contacts, only: [:new, :create]
end
