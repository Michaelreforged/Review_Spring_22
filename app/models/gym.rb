class Gym < ApplicationRecord
  has_one :badge, dependent: :destroy
  
  def self.w_badges
    select("g.id, g.name, b.name as badge_name")
    .from("gyms as g")
    .joins("left join badges as b on g.id = b.gym_id")
  end

end
