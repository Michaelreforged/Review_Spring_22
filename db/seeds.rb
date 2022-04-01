# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pokemon.destroy_all

6.times do 
  Pokemon.create(name:Faker::Games::Pokemon.name, location: Faker::Games::Pokemon.location)
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


p "====================================="
p "# of pokemon = #{Pokemon.count}"
p "# of gym = #{Gym.count}"
p "# of badge = #{Badge.count}"