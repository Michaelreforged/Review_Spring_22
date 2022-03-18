Rails.application.routes.draw do
  namespace :api do
    get '/pokemons', to: 'pokemons#index'
    post '/pokemons/', to: 'pokemons#create'
    get '/pokemons/:id', to: 'pokemons#show'
    delete '/pokemons/:id', to: 'pokemons#destroy'
    put '/pokemons/:id', to: 'pokemons#update'
    patch '/pokemons/:id', to: 'pokemons#update'

    resources :trainers do 
      resources :badges 
    end

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
