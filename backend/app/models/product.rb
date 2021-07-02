class Product < ApplicationRecord
    belongs_to :product_group
    has_many :batches
    has_many :items, through: :batches
end
