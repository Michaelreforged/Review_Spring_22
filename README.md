# README

Notes for Review

Add useNav to pokemon page 
  nav("/pokemonspage")

Add custom sql call to limit pokemon to non-captured
  def self.not_captured
    Pokemon.find_by_sql('SELECT p.*
    FROM pokemons as p
    LEFT JOIN party_pokemons as pp ON pp.pokemon_id = p.id
    WHERE pp.id is null
    order by p.id')
  end

Change paginate 
  def pagePokemon
    pokemon = Pokemon.not_captured
    count = pokemon.count
    render json: {pokemon: Kaminari.paginate_array(pokemon).page(@page).per(@per), count:count, per:@per}
  end

Model generation
  rails g model Notification reciever_id:integer sender_id:integer read_at:datetime action notifiable_id:int notifiable_type
run `rails db:migrate` after

Go into notification model and add the below, class_name is to the model you want to notify, polymorphic to notifiable so that notification can belong to multiple models 
  belongs_to :reciever, class_name:"User"
  belongs_to :sender, class_name:"User", optional: true
  belongs_to :notifiable, polymorphic: true

Go into user and add the following line, this is so that notifications can recieve the user id as receiver id for the foreign key
  has_many :notifications, foreign_key: :reciever_id
