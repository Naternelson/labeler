module SerializerHelper
    def includes(attribute)
        Proc.new { |record, params|
            params[attribute]
        }
    end

    def excludes(attribute)
        Proc.new { |record, params|
            !params[attribute]
        }
    end
  end