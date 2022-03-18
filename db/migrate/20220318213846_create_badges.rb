class CreateBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :badges do |t|
      t.string :gym
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
