Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    # resources :pokemons
    get '/pokemons', to:'pokemons#index'
    post '/pokemons', to:'pokemons#create'
    get '/pokemons/:id', to:'pokemons#show'
    put '/pokemons/:id', to:'pokemons#update'
    patch '/pokemons/:id', to:'pokemons#update'
    delete '/pokemons/:id', to:'pokemons#destroy'
  end
end
