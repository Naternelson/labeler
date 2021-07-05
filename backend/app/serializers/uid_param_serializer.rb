class UidParamSerializer
  include JSONAPI::Serializer
  attributes :name, :regex 

  set_key_transform :camel_lower
end
