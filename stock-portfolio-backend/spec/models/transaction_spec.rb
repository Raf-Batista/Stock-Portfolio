require 'rails_helper'

RSpec.describe Transaction, type: :model do
  it { should belong_to(:user) }
  it { should belong_to(:stock) }

  it { should validate_presence_of(:shares) }
  it { should validate_presence_of(:bought) }
  it { should validate_presence_of(:value) }
  it { should validate_presence_of(:symbol) }

end
