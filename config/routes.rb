Rails.application.routes.draw do
  root 'pages#index'

  get 'partners', controller: 'pages'
  get 'team', controller: 'pages'

  get 'news', to: 'news#index'
  get 'news/example'

  get 'products', to: redirect('products/mo99')
  get 'products/mo99'
  get 'products/ga67'
  get 'products/tl201'

  get 'about', to: redirect('about/molecular_imaging')
  get 'about/molecular_imaging'
  get 'about/eldan'
  get 'about/neopharm'

  resources :contacts, only: [:new, :create]
  get 'contacts', to: 'contacts#new'

  match '/404', to: 'errors#not_found', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all
end
