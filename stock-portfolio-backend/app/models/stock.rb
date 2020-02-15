class Stock < ApplicationRecord
    belongs_to :user

    validates :symbol, presence: true
    validates :value, presence: true
    validates :shares, presence: true
end
