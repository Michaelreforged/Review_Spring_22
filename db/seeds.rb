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

600.times do 
  poke = Faker::Games::Pokemon.name
  Pokemon.create(name:poke, species:poke, location: Faker::Games::Pokemon.location)
end

@gyms = [
  "Pewter",
  "Curelean"
] 

@badge = [
  "Boulder",
  "Cascade"
]

for g in 0..1 do 
  gym = Gym.create(name:@gyms[g])
  gym.create_badge(name:@badge[g])
end

p "====================================="
p "# of pokemon = #{Pokemon.count}"
p "# of gym = #{Gym.count}"
p "# of Badge = #{Badge.count}"