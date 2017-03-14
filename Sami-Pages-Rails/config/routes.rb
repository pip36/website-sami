Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'

  get '/about', to: 'static_pages#about'



  get '/contact', to: 'messages#new'
  post '/contact', to: 'messages#create'
end
