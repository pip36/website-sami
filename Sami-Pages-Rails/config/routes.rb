Rails.application.routes.draw do

  post 'order_items/create'

  get 'order_items/update'

  get 'order_items/destroy'

  get 'carts/show'

  get 'products/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'

  get '/about', to: 'static_pages#about'
  get '/cane', to: 'static_pages#cane'


  get '/contact', to: 'messages#new'
  post '/contact', to: 'messages#create'
end
