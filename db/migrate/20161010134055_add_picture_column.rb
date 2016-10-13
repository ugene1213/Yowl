class AddPictureColumn < ActiveRecord::Migration
  def change
    add_column :businesses, :picture, :string, null: false, index: true
  end
end
