class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.belongs_to :user
      t.belongs_to :stock
      t.string :symbol
      t.integer :shares 
      t.boolean :bought, default: true
      t.decimal :value, :precision => 8, :scale => 2
      t.string :date
      
      t.timestamps
    end
  end
end


