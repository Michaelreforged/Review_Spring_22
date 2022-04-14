# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# UserBadge.destroy #??
Gym.destroy_all
User.destroy_all
Pokemon.destroy_all

60.times do 
  poke = Faker::Games::Pokemon.name
  Pokemon.create(name:poke, species:poke, location: Faker::Games::Pokemon.location)
end

@gyms = [
  "Pewter",
  "Cerulean",
  "Vermillion",
  "Celadon",
  "Fuchsia",
  "Saffron",
  "Cinnabar",
  "Viridian",
]
@gyms_badges = [
  "Boulder",
  "Cascade",
  "Thunder",
  "Rainbow",
  "Soul",
  "Marsh",
  "Volcano",
  "Earth",
]

for g in 0..7 do
  gym = Gym.create(name:@gyms[g])
  gym.create_badge(name:@gyms_badges[g], gym_id:gym.id)
end 

@r = User.create(name:"Red",email:"red@pallet.com",password:"Pikachu")
@b = User.create(name:"Blue",email:"blue@pallet.com",password:"Blastoise")
@g = User.create(name:"Green",email:"ash@pallet.com",password:"Charizard")

@rp = [
  "Pikachu",
  "Moltres",
  "Mewtwo",
  "Articuno",
  "Zapdos",
  "Gengar",
]
@bp = [
  "Alakazam",
  "Pidgeot",
  "Rhydon",
  "Blastoise",
  "Arcanine",
  "Venusaur",
]
@gp = [
  "Kangaskhan",
  "Gengar",
  "Blastoise",
  "Victreebel",
  "Clefable",
  "Clefable",
]

for mon in 0..5 do 
  rp = Pokemon.create(species:@rp[mon], name:@rp[mon],location: Faker::Games::Pokemon.location)
  gp = Pokemon.create(species:@gp[mon], name:@gp[mon],location: Faker::Games::Pokemon.location)
  bp = Pokemon.create(species:@bp[mon], name:@bp[mon],location: Faker::Games::Pokemon.location)
  pp = PartyPokemon.create(user_id:@r.id, pokemon_id:rp.id)
  PartyPokemon.create(user_id:@g.id, pokemon_id:gp.id)
  PartyPokemon.create(user_id:@b.id, pokemon_id:bp.id)
end

p "====================================="
p "# of Pokemon = #{Pokemon.count}"
p "# of Gyms = #{Gym.count}"
p "# of Badges = #{Badge.count}"
p "# of Users = #{User.count}"
p "# of Reds Pokemons = #{@r.party_pokemons.size}"
