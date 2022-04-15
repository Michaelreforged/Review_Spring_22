class Pokemon < ApplicationRecord
  validates :name, presence: {message:" is Required"}
  validates :location, length: {minimum: 4 ,message:" length needs to be atleast 4 chars"}

  def self.not_captured
    Pokemon.find_by_sql('SELECT p.*
    FROM pokemons as p
    LEFT JOIN party_pokemons as pp ON pp.pokemon_id = p.id
    WHERE pp.id is null
    order by p.id')
  end

end
