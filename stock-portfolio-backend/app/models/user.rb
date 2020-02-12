class User < ApplicationRecord
    has_secure_password 
    has_many :transactions
    has_many :stocks, through: :transactions

    validates :name, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, presence: true
    validates :email, uniqueness: true
end
