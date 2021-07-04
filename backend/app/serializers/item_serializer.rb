class ItemSerializer
  include JSONAPI::Serializer
  attributes :status, :location, :represents
  belongs_to :batch 
  has_many :uids, uid_params
end
