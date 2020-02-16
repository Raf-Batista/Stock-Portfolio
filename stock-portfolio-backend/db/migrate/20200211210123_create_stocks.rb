class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.integer :user_id
      t.string :symbol
      t.integer :shares, default: 0, limit: 8 
      t.decimal :value, precision: 8, scale: 2

      t.timestamps
    end
  end
end
