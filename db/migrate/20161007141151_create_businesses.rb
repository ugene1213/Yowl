class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false, index: true
      t.string :description, null: false
      t.string :lng, null: false
      t.string :lat, null: false 
      t.string :address, null: false, index: true

      t.timestamps null: false
    end
  end
end
