class Product < ApplicationRecord
    belongs_to :product_group
    has_many :batches
    has_many :items, through: :batches

    has_many :compositions, foreign_key: :parent_product_id, class_name: "Composition"
    has_many :components, through: :compositions, source: :child_product
    has_many :parent_compositions, foreign_key: :child_product_id, class_name: "Composition"
    has_many :parent_components, through: :parent_compositions, source: :parent_product
end
