class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.belongs_to :user
      t.belongs_to :stock
      t.integer :shares 
      t.date :date 
      t.boolean :bought, default: true
      t.decimal :value, :precision => 8, :scale => 2
      
      t.timestamps
    end
  end
end

