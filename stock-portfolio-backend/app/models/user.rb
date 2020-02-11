class User < ApplicationRecord
    has_secure_password 

    has_many :stocks

    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :email, uniqueness: true
end
