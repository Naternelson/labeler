class Uid < ApplicationRecord
    belongs_to :item 
    belongs_to :uid_param
end
