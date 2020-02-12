class Transaction < ApplicationRecord
    # User and Stock join table
    belongs_to :user 
    belongs_to :stock

    validates :shares, presence: true 
    validates :bought, presence: true 
    validates :value, presence: true 

end
