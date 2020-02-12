require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'User validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:password) }
    it { should have_many(:stocks) }
    
    it 'is created with a default balance' do 
      expect(User.new.balance).to eq(5000.00)
    end 

    describe 'valid email' do 
      it 'is created with a valid email' do
        User.create(name: 'test', email: 'test@email.com', password: 'test123')

        expect(!!User.last).to eq(true)
      end

      it 'is not created if email exists' do
        User.create(name: 'test', email: 'test@email.com', password: 'test123')

        not_created = User.create(name: 'test', email: 'test@email.com', password: 'test123')

        expect(not_created.valid?).to eq(false)
      end

      it 'is not created with an invalid email' do
        User.create(name: 'test', email: 'test', password: 'test123')

        expect(!!User.last).to eq(false)
      end

      it 'is not created with a blank email' do
        User.create(name: 'test', password: 'test123')

        expect(!!User.last).to eq(false)
      end
    end 
    
  end 
end
