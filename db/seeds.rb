# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pokemon.destroy_all
# UserBadge.destroy #??
Gym.destroy_all
# User.destroy_all

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

User.create(name:"Red",email:"red@pallet.com",password:"Pikachu")
User.create(name:"Blue",email:"blue@pallet.com",password:"Blastoise")
User.create(name:"Green",email:"ash@pallet.com",password:"Charizard")

p "====================================="
p "# of Pokemon = #{Pokemon.count}"
p "# of Gyms = #{Gym.count}"
p "# of Badges = #{Badge.count}"
p "# of Users = #{User.count}"
