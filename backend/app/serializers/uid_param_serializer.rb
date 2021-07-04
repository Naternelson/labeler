class UidParamSerializer
  include JSONAPI::Serializer

  #Attributes
  attributes :name, :regex
  
  #Relationships

  #Key Transform
  set_key_transform :camel_lower
end
