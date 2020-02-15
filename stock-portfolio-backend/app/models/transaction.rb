class Transaction < ApplicationRecord
    belongs_to :user 
    belongs_to :stock

    validates :shares, presence: true 
    validates :bought, presence: true 
    validates :value, presence: true 
    validates :symbol, presence: true 

end
