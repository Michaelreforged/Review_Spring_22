class Pokemon < ApplicationRecord
  validates :name, presence: {message:" is Required"}
  validates :location, length: {minimum: 4 ,message:" length needs to be atleast 4 chars"}

  def self.not_captured
    Pokemon.find_by_sql('
    select p.*
    from pokemons as p
    left join party_pokemons as party on party.pokemon_id = p.id
    where party.id is null
    order by p.id
    ')
  end
end
