class Transaction < ApplicationRecord
    belongs_to :user 
    belongs_to :stock

    validates :shares, presence: true 
    validates :bought, presence: true 
    validates :value, presence: true 

end
