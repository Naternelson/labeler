class Batch < ApplicationRecord
    belongs_to :product 
    has_many :sub_assemblies, foreign_key: :parent_batch_id, class_name: "Assembly"
    has_many :sub_components, through: :sub_assemblies, source: :batch
    has_many :parent_assemblies, foreign_key: :batch_id, class_name: "Assembly"
    has_many :parent_components, through: :parent_assemblies, source: :parent_batch
    has_many :items
end
