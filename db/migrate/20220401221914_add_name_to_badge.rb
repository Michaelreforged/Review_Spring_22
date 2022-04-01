class AddNameToBadge < ActiveRecord::Migration[6.1]
  def change
    add_column :badges, :name, :string
  end
end
