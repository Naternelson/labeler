class ProductGroup < ApplicationRecord
    has_many :products
    has_many :batches, through: :products
end
