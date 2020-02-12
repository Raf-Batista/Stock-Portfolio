class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.integer :shares 
      t.decimal :value, :precision => 8, :scale => 2

      t.timestamps
    end
  end
end
