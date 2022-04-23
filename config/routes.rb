Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    get '/pokemons', to: 'pokemons#index'
    post '/pokemons/', to: 'pokemons#create'
    get '/pokemons/:id', to: 'pokemons#show'
    delete '/pokemons/:id', to: 'pokemons#destroy'
    put '/pokemons/:id', to: 'pokemons#update'
    patch '/pokemons/:id', to: 'pokemons#update'
    get "/pagepokemon", to: 'pokemons#pagePokemon'
    get "/gyms", to: "gyms#gym_badges"
    get "/trainers", to: "users#trainers"
    put "/addPoke/:id", to: "party_pokemons#add_pokemon"
    get "/myparty", to: "users#my_pokemon"
    resources :notifications
    put "/read_one/:id", to:"notifications#read_one"
    put "/read_all/", to:"notifications#read_all"
    get "/trainerpokemons", to:"users#trainerspokes"

    resources :badges do
      resources :user_badges
    end

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
