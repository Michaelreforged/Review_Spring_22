class CreateBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :badges do |t|
      t.belongs_to :gym, null: false, foreign_key: true

      t.timestamps
    end
  end
end
