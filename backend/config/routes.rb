Rails.application.routes.draw do
  resources :product_groups, only: [:index] 
  resources :products, only: [:index] 
  resources :batches, only: [:index]
  resources :items, only: [:index]
  resources :uid_params, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
