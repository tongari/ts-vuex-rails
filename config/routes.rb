Rails.application.routes.draw do
  root 'main#index'
  resources :main, only: [:create]
  # resources :register, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
