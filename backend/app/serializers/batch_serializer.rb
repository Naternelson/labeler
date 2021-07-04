class BatchSerializer
  include JSONAPI::Serializer
  attributes :mfg, :exp, :created_at
  has_many :sub_components, items 

end
