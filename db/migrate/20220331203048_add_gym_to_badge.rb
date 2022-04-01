class AddGymToBadge < ActiveRecord::Migration[6.1]
  def change
    add_reference :badges, :gym, null: false, foreign_key: true
  end
end
