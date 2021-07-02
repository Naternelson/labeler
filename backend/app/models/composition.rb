class Composition < ApplicationRecord
    has_many :assemblies
    belongs_to :parent_product, foreign_key: :parent_product_id, class_name: "Product"
    belongs_to :child_product, foreign_key: :child_product_id, class_name: "Product"
end
