class Stock < ApplicationRecord
    has_many :transactions 
    has_many :users, through: :transactions

    validates :symbol, presence: true
    validates :value, presence: true
    validates :shares, presence: true
end
