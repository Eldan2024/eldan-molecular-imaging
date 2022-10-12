Rails.application.routes.draw do
  root 'pages#index'

  get 'distribution', controller: 'pages'
  get 'team', controller: 'pages'

  get 'news', to: 'news#index'
  get 'news/eldan_mi_website_online'

  get 'products', to: redirect('products/mo99')
  get 'products/mo99'
  get 'products/ga67'
  get 'products/ti201'

  get 'about', to: redirect('about/molecular_imaging')
  get 'about/molecular_imaging'
  get 'about/eldan'
  get 'about/neopharm_group'

  resources :contacts, only: [:new, :create]
  get 'contacts', to: 'contacts#new'

  match '/404', to: 'errors#not_found', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all
end
