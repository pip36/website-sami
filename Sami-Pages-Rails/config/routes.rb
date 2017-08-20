Rails.application.routes.draw do

resources :order_items


  get 'carts/show'
  get 'carts/purchase'
  

  get 'products/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'

  get '/about', to: 'static_pages#about'
  get '/cane', to: 'static_pages#cane'
  get '/cases', to: 'static_pages#cases'

  get '/contact', to: 'messages#new'
  post '/contact', to: 'messages#create'
end
