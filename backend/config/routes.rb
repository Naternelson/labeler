Rails.application.routes.draw do
  resources :product_groups, only: [:index] 
  resources :products, only: [:index] 
  resources :batches, only: [:index]
  resources :items, only: [:index]
  resources :uid_params, only: [:index]
end
