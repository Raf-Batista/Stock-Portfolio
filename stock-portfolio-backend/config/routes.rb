Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  resources :users do
    resources :stocks, :transactions
  end
  
  post '/login', to: 'sessions#create'
end
