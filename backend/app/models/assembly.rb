class Assembly < ApplicationRecord
    belongs_to :batch 
    belongs_to :parent_batch, foreign_key: :parent_batch_id, class_name: "Batch"
    belongs_to :composition
end
