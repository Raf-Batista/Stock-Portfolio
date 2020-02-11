require 'rails_helper'

RSpec.describe Stock, type: :model do
  it { should validate_presence_of(:symbol) }
  it { should validate_presence_of(:shares) }
  it { should validate_presence_of(:value) }

  it { should belong_to(:user) }
end
