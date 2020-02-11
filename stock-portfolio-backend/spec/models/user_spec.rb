require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'User validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_presence_of(:password) }
    
    it 'is created with a default balance' do 
      expect(User.new.balance).to eq(5000.00)
    end 
  end 
end
